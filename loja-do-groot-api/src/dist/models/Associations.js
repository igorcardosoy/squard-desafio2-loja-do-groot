"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Plant_1 = __importDefault(require("./Plant"));
const PlantType_1 = __importDefault(require("./PlantType"));
const PlantTypePlant_1 = __importDefault(require("./PlantTypePlant"));
Plant_1.default.belongsToMany(PlantType_1.default, {
    through: PlantTypePlant_1.default,
    foreignKey: 'plantId',
    as: 'plantTypes',
});
PlantType_1.default.belongsToMany(Plant_1.default, {
    through: PlantTypePlant_1.default,
    foreignKey: 'plantTypeId',
    as: 'plants',
});
