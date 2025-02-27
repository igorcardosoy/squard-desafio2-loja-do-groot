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

// Controlador para detalhar uma planta
export const getPlantTypeById = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params; 
    
    const plantType = await PlantType.findByPk(id);

    if (!plantType) {
      res.status(404).json({ error: 'Planta não encontrada' });
    }

    res.status(200).json(plantType);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao buscar planta' });
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
    res.status(500).json({ error: 'Erro ao criar os tipos de planta' });
  }
};

// Controlador para atualizar um tipo de planta
export const updatePlantType = async (req: Request, res: Response) : Promise<void>  => {
  try {
    const {id} = req.params
    const { name } = req.body;

    await PlantType.update(
      { 
        name 
      },
      { where: { id } }
    );

    res.status(200).json();
  } catch (error) {    
    console.error(error)
    res.status(500).json({ error: 'Erro ao atualizar os tipos de planta' });
  }
};

// Controlador para deletar um tipo de planta
export const deletePlantType = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;

    const plantType = await PlantType.findByPk(id);
    if (!plantType) {
      res.status(404).json({ error: 'Tipo de Planta não encontrado' });
    }

    if(plantType){
      await plantType.destroy();
    }

    res.status(204).send();
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao deletar tipo de planta' });
  }
};