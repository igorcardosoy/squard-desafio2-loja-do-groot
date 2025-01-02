import { Request, Response } from 'express';
import PlantType from "../models/PlantType";

export const getPlantTypes = async (req: Request, res: Response) => {
  try {
    const plantTypes = await PlantType.findAll();
    res.status(200).json(plantTypes); 
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Erro ao buscar tipos de planta' });
  }
};