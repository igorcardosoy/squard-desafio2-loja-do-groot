"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const dbConfig_1 = __importDefault(require("../config/dbConfig"));
class PlantTypePlant extends sequelize_1.Model {
}
PlantTypePlant.init({
    plantId: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        references: {
            model: 'plants',
            key: 'id',
        },
        onDelete: 'CASCADE',
    },
    plantTypeId: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        references: {
            model: 'plant_types',
            key: 'id',
        },
        onDelete: 'CASCADE',
    },
}, {
    sequelize: dbConfig_1.default,
    modelName: 'PlantTypePlant',
    tableName: 'plant_type_plants',
    timestamps: false,
});
exports.default = PlantTypePlant;
