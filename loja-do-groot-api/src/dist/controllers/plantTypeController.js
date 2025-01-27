"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deletePlantType = exports.updatePlantType = exports.createPlantType = exports.getPlantTypeById = exports.getPlantTypes = void 0;
const PlantType_1 = __importDefault(require("../models/PlantType"));
// Controlador para listar todos os tipos de planta
const getPlantTypes = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const plantTypes = yield PlantType_1.default.findAll();
        res.status(200).json(plantTypes);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao buscar tipos de planta' });
    }
});
exports.getPlantTypes = getPlantTypes;
// Controlador para detalhar uma planta
const getPlantTypeById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const plantType = yield PlantType_1.default.findByPk(id);
        if (!plantType) {
            res.status(404).json({ error: 'Planta não encontrada' });
        }
        res.status(200).json(plantType);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao buscar planta' });
    }
});
exports.getPlantTypeById = getPlantTypeById;
// Controlador para criar um novo tipo de planta
const createPlantType = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name } = req.body;
        const newPlantType = yield PlantType_1.default.create({ name });
        res.status(201).json(newPlantType);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao criar os tipos de planta' });
    }
});
exports.createPlantType = createPlantType;
// Controlador para atualizar um tipo de planta
const updatePlantType = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const { name } = req.body;
        yield PlantType_1.default.update({
            name
        }, { where: { id } });
        res.status(200).json();
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao atualizar os tipos de planta' });
    }
});
exports.updatePlantType = updatePlantType;
// Controlador para deletar um tipo de planta
const deletePlantType = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const plantType = yield PlantType_1.default.findByPk(id);
        if (!plantType) {
            res.status(404).json({ error: 'Tipo de Planta não encontrado' });
        }
        if (plantType) {
            yield plantType.destroy();
        }
        res.status(204).send();
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao deletar tipo de planta' });
    }
});
exports.deletePlantType = deletePlantType;
