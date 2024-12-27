import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from '../config/dbConfig';
import PlantType from './PlantType';

interface PlantAttributes {
  id: number;
  name: string;
  subtitle: string;
  price: number;
  discountPercentage: number | null;
  description: string | null;  
  imgUrl: string | null;       
  plantTypeId: number;
  features: string | null;    
}

interface PlantCreationAttributes extends Optional<PlantAttributes, 'id'> {}

class Plant extends Model<PlantAttributes, PlantCreationAttributes> implements PlantAttributes {
  public id!: number;
  public name!: string;
  public subtitle!: string;
  public price!: number;
  public discountPercentage!: number | null;
  public description!: string | null;
  public imgUrl!: string | null;
  public plantTypeId!: number;
  public features!: string | null; 
}

Plant.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    subtitle: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    discountPercentage: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true, 
    },
    imgUrl: {
      type: DataTypes.STRING,
      allowNull: true, 
    },
    plantTypeId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    features: {
      type: DataTypes.STRING,  
      allowNull: true, 
    },
  },
  {
    sequelize,
    modelName: 'Plant',
    tableName: 'plants',
    timestamps: true,
  }
);

Plant.belongsTo(PlantType, {
  foreignKey: 'plantTypeId',
  as: 'plantType',
});

PlantType.hasMany(Plant, {
  foreignKey: 'plantTypeId',
  as: 'plants',
});

export default Plant;
