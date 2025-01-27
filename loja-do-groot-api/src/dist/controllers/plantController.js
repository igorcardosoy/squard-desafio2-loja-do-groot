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
exports.getPlantById = exports.deletePlant = exports.updatePlant = exports.createPlant = exports.getPlants = void 0;
const Plant_1 = __importDefault(require("../models/Plant"));
const PlantType_1 = __importDefault(require("../models/PlantType"));
const dbConfig_1 = __importDefault(require("../config/dbConfig"));
const PlantTypePlant_1 = __importDefault(require("../models/PlantTypePlant"));
// Controlador para obter todas as plantas
const getPlants = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const plants = yield Plant_1.default.findAll({
            include: [
                {
                    model: PlantType_1.default,
                    as: 'plantTypes',
                    attributes: ['id', 'name']
                },
            ]
        });
        res.status(200).json(plants);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao buscar plantas' });
    }
});
exports.getPlants = getPlants;
// Controlador para criar uma nova planta
const createPlant = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const transaction = yield dbConfig_1.default.transaction();
    try {
        const { name, subtitle, price, discountPercentage, description, features, imgUrl, plantTypeId } = req.body;
        if (!Array.isArray(plantTypeId) || !plantTypeId.every((id) => typeof id === 'number')) {
            yield transaction.rollback();
            res.status(400).json({ error: 'plantTypeId deve ser um array de números' });
        }
        const newPlant = yield Plant_1.default.create({
            name,
            subtitle,
            price,
            discountPercentage,
            description,
            features,
            imgUrl,
            isInSale: true,
        }, { transaction });
        for (const typeId of plantTypeId) {
            yield PlantTypePlant_1.default.create({ plantId: newPlant.id, plantTypeId: typeId }, { transaction });
        }
        const createdPlant = yield Plant_1.default.findByPk(newPlant.id, {
            include: [
                {
                    model: PlantType_1.default,
                    as: 'plantTypes',
                    attributes: ['id', 'name'], // Retorne os campos relevantes
                },
            ],
            transaction,
        });
        yield transaction.commit();
        res.status(201).json(createdPlant);
    }
    catch (error) {
        console.error(error);
        yield transaction.rollback();
        res.status(500).json({ error: 'Erro ao criar planta' });
    }
});
exports.createPlant = createPlant;
// Controlador para atualizar uma planta
const updatePlant = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const { name, subtitle, price, discountPercentage, description, features, imgUrl, isInSale } = req.body;
        yield Plant_1.default.update({
            name, subtitle, price, discountPercentage, description, features, imgUrl, isInSale
        }, { where: { id } });
        res.status(200).json();
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao atualizar planta' });
    }
});
exports.updatePlant = updatePlant;
// Controlador para deletar uma planta
const deletePlant = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const plant = yield Plant_1.default.findByPk(id);
        if (!plant) {
            res.status(404).json({ error: 'Planta não encontrada' });
        }
        if (plant) {
            yield plant.destroy();
        }
        res.status(204).send();
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao deletar planta' });
    }
});
exports.deletePlant = deletePlant;
// Controlador para detalhar uma planta
const getPlantById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const plant = yield Plant_1.default.findByPk(id, {
            include: [{ model: PlantType_1.default, as: 'plantTypes' }],
        });
        if (!plant) {
            res.status(404).json({ error: 'Planta não encontrada' });
            return;
        }
        res.status(200).json(plant);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao buscar planta' });
    }
});
exports.getPlantById = getPlantById;
