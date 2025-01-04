import express from 'express';

import { createPlantType, deletePlantType, getPlantTypeById, getPlantTypes, updatePlantType } from '../controllers/plantTypeController';

import '../models/Associations'; 

const router = express.Router();

// Rota para buscar os tipos de plantas
router.get('/', getPlantTypes);

// Rota para criar um tipo de plantas
router.post('/', createPlantType );

// Rota para atualizar informações de um tipo de plantas
router.put('/:id', updatePlantType);

// Rota para deletar um tipo de plantas
router.delete('/:id', deletePlantType);

// Rota para buscar os detalhes de um tipo de planta
router.get('/:id', getPlantTypeById);

export default router;
