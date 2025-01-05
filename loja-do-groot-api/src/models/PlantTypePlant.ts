import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/dbConfig';

class PlantTypePlant extends Model {}

PlantTypePlant.init(
  {
    plantId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      references: {
        model: 'plants',
        key: 'id',
      },
      onDelete: 'CASCADE',
    },
    plantTypeId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      references: {
        model: 'plant_types',
        key: 'id',
      },
      onDelete: 'CASCADE',
    },
  },
  {
    sequelize,
    modelName: 'PlantTypePlant',
    tableName: 'plant_type_plants',
    timestamps: false,
  }
);

export default PlantTypePlant;
