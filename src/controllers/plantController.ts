import { Request, Response } from 'express';
import Plant from '../models/Plant'; // Modelo de dados das plantas

// Controlador para obter todas as plantas
export const getPlants = async (req: Request, res: Response) => {
  try {
    const plants = await Plant.findAll(); // Busca todas as plantas no banco de dados
    res.status(200).json(plants); // Retorna as plantas em formato JSON
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar plantas' });
  }
};

// Controlador para criar uma nova planta
export const createPlant = async (req: Request, res: Response) => {
  try {
    const { name, subtitle, price, discountPercentage, description, imgUrl, plantTypeId } = req.body;

    // Cria a nova planta no banco de dados
    const newPlant = await Plant.create({
      name,
      subtitle,
      price,
      discountPercentage,
      description,
      imgUrl,
      plantTypeId,
    });

    res.status(201).json(newPlant); // Retorna a planta recém-criada
  } catch (error) {
    res.status(400).json({ error: 'Erro ao criar planta' });
  }
};
