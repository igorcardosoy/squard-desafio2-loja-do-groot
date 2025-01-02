import { Request, RequestHandler, Response } from 'express';
import Plant from '../models/Plant'; // Modelo de dados das plantas
import PlantType from '../models/PlantType';

// Controlador para obter todas as plantas
export const getPlants = async (req: Request, res: Response) => {
  try {
    const plants = await Plant.findAll();
    res.status(200).json(plants); // Retorna as plantas em formato JSON
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Erro ao buscar plantas' });
  }
};

// Controlador para criar uma nova planta
export const createPlant = async (req: Request, res: Response): Promise<void> => {
  try {
    const { name, subtitle, price, discountPercentage, description, features, imgUrl, plantTypeId } = req.body;

    // Validação: plantTypeId deve ser um array de números
    if (!Array.isArray(plantTypeId) || !plantTypeId.every((id: any) => typeof id === 'number')) {
       res.status(400).json({ error: 'plantTypeId deve ser um array de números' });
       return;
    }

    // Cria a nova planta no banco de dados
    const newPlant = await Plant.create({
      name,
      subtitle,
      price,
      discountPercentage,
      description,
      features,
      imgUrl,
      isInSale: true
    });

    await newPlant.addPlantTypes(plantTypeId);

    // Retorna a planta recém-criada com seus tipos associados
    const createdPlant = await Plant.findByPk(newPlant.id, {
      include: [{ model: PlantType, as: 'plantTypes' }],
    });

    res.status(201).json(createdPlant);

    res.status(201).json(newPlant); // Retorna a planta recém-criada
  } catch (error) {
    console.error(error)
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

