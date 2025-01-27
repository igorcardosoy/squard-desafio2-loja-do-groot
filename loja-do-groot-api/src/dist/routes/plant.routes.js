"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const plantController_1 = require("../controllers/plantController");
const validationMiddleware_1 = require("../middlewares/validationMiddleware");
require("../models/Associations");
const router = express_1.default.Router();
router.get('/', plantController_1.getPlants);
router.post('/', validationMiddleware_1.validatePlant, plantController_1.createPlant);
router.get('/:id', plantController_1.getPlantById);
router.put('/:id', validationMiddleware_1.validatePlant, plantController_1.updatePlant);
router.delete('/:id', plantController_1.deletePlant);
exports.default = router;
