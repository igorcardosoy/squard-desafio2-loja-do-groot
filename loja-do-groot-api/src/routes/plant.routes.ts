import express from 'express';

import { getPlants, createPlant, updatePlant, deletePlant, getPlantById } from '../controllers/plantController';
import { validatePlant } from '../middlewares/validationMiddleware';

import '../models/Associations'; 

const router = express.Router();

router.get('/', getPlants);

router.post('/',  validatePlant, createPlant );

router.get('/:id', getPlantById);

router.put('/:id', validatePlant, updatePlant);

router.delete('/:id', deletePlant);

export default router;
