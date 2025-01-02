import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/dbConfig';
import Plant from './Plant';
import PlantTypePlant from './PlantTypePlant';


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

// Relacionamento muitos-para-muitos
PlantType.belongsToMany(Plant, {
  through: PlantTypePlant,
  foreignKey: 'plantTypeId',
  as: 'plants',
});

export default PlantType;
