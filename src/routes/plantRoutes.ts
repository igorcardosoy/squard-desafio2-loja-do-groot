import express from 'express';

import { getPlants, createPlant, updatePlant } from '../controllers/plantController';
import { validatePlant } from '../middlewares/validationMiddleware';
import { createPlantType, getPlantTypes, updatePlantType } from '../controllers/plantTypeController';

import '../models/Associations'; 



const router = express.Router();

// Rota para obter todas as plantas
router.get('/', getPlants);

// Rota para criar uma nova planta (valida o corpo da requisição antes de criar)
router.post('/',  validatePlant, createPlant );

// Rota para atualizar informações de uma planta
router.put('/:id', validatePlant, updatePlant);

// Rota para buscar os tipos de plantas
router.get('/', getPlantTypes);

// Rota para criar um tipo de plantas
router.post('/', createPlantType );

// Rota para atualizar informações de um tipo de plantas
router.put('/:id', updatePlantType);


//TODOS:
// Rota para deletar uma planta


// Rota para buscar informações de uma planta


// Rota para buscar os detalhes de um tipo de planta


// Rota para deletar um tipo de plantas


export default router;
