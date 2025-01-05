import express from 'express';

import { getPlants, createPlant, updatePlant, deletePlant, getPlantById } from '../controllers/plantController';
import { validatePlant } from '../middlewares/validationMiddleware';
;

import '../models/Associations'; 

const router = express.Router();

// Rota para obter todas as plantas
router.get('/', getPlants);

// Rota para criar uma nova planta (valida o corpo da requisição antes de criar)
router.post('/',  validatePlant, createPlant );

// Rota para obter todas as plantas
router.get('/:id', getPlantById);

// Rota para atualizar informações de uma planta
router.put('/:id', validatePlant, updatePlant);

// Rota para deletar uma planta
router.delete('/:id', deletePlant);

export default router;
