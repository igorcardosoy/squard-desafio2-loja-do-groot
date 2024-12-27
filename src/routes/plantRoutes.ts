import express from 'express';
import { getPlants, createPlant } from '../controllers/plantController'; // Controladores das plantas
import { validatePlant } from '../middlewares/validationMiddleware'; // Middleware de validação

const router = express.Router();

// Rota para obter todas as plantas
router.get('/', getPlants);

// Rota para criar uma nova planta (valida o corpo da requisição antes de criar)
router.post('/', validatePlant, createPlant);

export default router;
