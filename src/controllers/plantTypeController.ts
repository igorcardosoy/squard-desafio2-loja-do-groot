import { Request, Response } from 'express';
import PlantType from "../models/PlantType";

// Controlador para listar todos os tipos de planta
export const getPlantTypes = async (req: Request, res: Response) => {
  try {
    const plantTypes = await PlantType.findAll();
    res.status(200).json(plantTypes); 
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Erro ao buscar tipos de planta' });
  }
};

// Controlador para criar um novo tipo de planta
export const createPlantType = async (req: Request, res: Response): Promise<void> => {
  try {
    const { name } = req.body;

    const newPlantType = await PlantType.create({ name });

 
    res.status(201).json(newPlantType);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao criar PlantType' });
  }
};