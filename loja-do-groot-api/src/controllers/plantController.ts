
import { Request, Response } from 'express';
import Plant from '../models/Plant'; 
import PlantType from '../models/PlantType';
import sequelize from '../config/dbConfig';

// Controlador para obter todas as plantas
export const getPlants = async (req: Request, res: Response) => {
  try {
    const plants = await Plant.findAll();
    res.status(200).json(plants); 
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Erro ao buscar plantas' });
  }
};

// Controlador para criar uma nova planta
export const createPlant = async (req: Request, res: Response): Promise<void> => {
  
  const transaction = await sequelize.transaction();

  try {
    const { name, subtitle, price, discountPercentage, description, features, imgUrl, plantTypeId } = req.body;

    if (!Array.isArray(plantTypeId) || !plantTypeId.every((id: any) => typeof id === 'number')) {
      await transaction.rollback();
      res.status(400).json({ error: 'plantTypeId deve ser um array de números' });
    }

    const newPlant = await Plant.create(
      {
        name,
        subtitle,
        price,
        discountPercentage,
        description,
        features,
        imgUrl,
        isInSale: true,
      },
      { transaction }
    );

    await newPlant.addPlantTypes(plantTypeId, { transaction });

    const createdPlant = await Plant.findByPk(newPlant.id, {
      include: [{ model: PlantType, as: 'plantTypes' }],
      transaction,
    });

    await transaction.commit();

    res.status(201).json(createdPlant);
  } catch (error) {
    console.error(error);
    await transaction.rollback();
    res.status(500).json({ error: 'Erro ao criar planta' });
  }
};

// Controlador para atualizar uma planta
export const updatePlant = async (req: Request, res: Response) : Promise<void>  => {
  try {
    const {id} = req.params
    const { name, subtitle, price, discountPercentage, description, features, imgUrl, isInSale } = req.body;

    await Plant.update(
      { 
        name, subtitle, price, discountPercentage, description, features, imgUrl, isInSale 
      },
      { where: { id } }
    );

    res.status(200).json();
  } catch (error) {    
    console.error(error)
    res.status(500).json({ error: 'Erro ao atualizar planta' });
  }
};

// Controlador para deletar uma planta
export const deletePlant = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;

    const plant = await Plant.findByPk(id);
    if (!plant) {
      res.status(404).json({ error: 'Planta não encontrada' });
    }

    if(plant){
      await plant.destroy();
    }

    res.status(204).send();
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao deletar planta' });
  }
};

// Controlador para detalhar uma planta
export const getPlantById = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params; 
    
    const plant = await Plant.findByPk(id, {
      include: [{ model: PlantType, as: 'plantTypes' }],
    });

    if (!plant) {
      res.status(404).json({ error: 'Planta não encontrada' });
      return;
    }

    res.status(200).json(plant);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao buscar planta' });
  }
};

