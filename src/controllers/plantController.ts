import { Request, Response } from 'express';
import Plant from '../models/Plant'; // Modelo de dados das plantas

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
export const createPlant = async (req: Request, res: Response) => {
  try {
    const { name, subtitle, price, discountPercentage, description, features, imgUrl, plantTypeId } = req.body;

    // Validação: plantTypeId deve ser um array de números
    if (!Array.isArray(plantTypeId) || !plantTypeId.every((id: any) => typeof id === 'number')) {
      return res.status(400).json({ error: 'plantTypeId deve ser um array de números' });
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

    // await newPlant.addPlantTypes(plantTypeId); // Depende de como a associação está configurada

    res.status(201).json(newPlant); // Retorna a planta recém-criada
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Erro ao criar planta' });
  }
};


// Controlador para atualizar uma planta
export const updatePlant = async (req: Request, res: Response) => {
  try {
    const {id} = req.params
    const { name, subtitle, price, discountPercentage, description, imgUrl, plantTypeId } = req.body;

    const plant = await Plant.findByPk(id);

    if (!plant) {
      return res.status(404).json({ error: 'Planta não encontrada' });
    }

    

    res.status(201).json(); // Retorna a planta recém-atualizada
  } catch (error) {    console.error(error)
    console.error(error)
    res.status(500).json({ error: 'Erro ao atualizar planta' });
  }
};