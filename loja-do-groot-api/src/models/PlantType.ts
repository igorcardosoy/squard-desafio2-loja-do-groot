import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/dbConfig';

class PlantType extends Model {}

PlantType.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'PlantType',
    tableName: 'plant_types',
    timestamps: false,
  }
);

export default PlantType;
