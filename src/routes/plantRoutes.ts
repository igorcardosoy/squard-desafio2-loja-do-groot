import express from 'express';

import { getPlants, createPlant, updatePlant } from '../controllers/plantController';
import { validatePlant } from '../middlewares/validationMiddleware';


const router = express.Router();

// Rota para obter todas as plantas
router.get('/', getPlants);

// Rota para criar uma nova planta (valida o corpo da requisição antes de criar)
router.post('/',  validatePlant, createPlant );

// Rota para atualizar informações de uma planta
// router.put('/:id', validatePlant, updatePlant);


//TODOS:
// Rota para deletar uma planta


// Rota para buscar informações de uma planta


// Rota para buscar os tipos de plantas


// Rota para buscar os detalhes de um tipo de planta


// Rota para criar um tipo de plantas


// Rota para deletar um tipo de plantas


export default router;
