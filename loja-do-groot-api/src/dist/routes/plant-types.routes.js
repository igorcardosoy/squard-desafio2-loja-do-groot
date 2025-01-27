"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const plantTypeController_1 = require("../controllers/plantTypeController");
require("../models/Associations");
const router = express_1.default.Router();
// Rota para buscar os tipos de plantas
router.get('/', plantTypeController_1.getPlantTypes);
// Rota para criar um tipo de plantas
router.post('/', plantTypeController_1.createPlantType);
// Rota para atualizar informações de um tipo de plantas
router.put('/:id', plantTypeController_1.updatePlantType);
// Rota para deletar um tipo de plantas
router.delete('/:id', plantTypeController_1.deletePlantType);
// Rota para buscar os detalhes de um tipo de planta
router.get('/:id', plantTypeController_1.getPlantTypeById);
exports.default = router;
