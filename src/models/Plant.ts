import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from '../config/dbConfig';
import PlantType from './PlantType';
import PlantTypePlant from './PlantTypePlant';


interface PlantAttributes {
  id: number;
  name: string;
  subtitle: string;
  price: number;
  discountPercentage: number | null;
  description: string;
  features: string;
  imgUrl: string;
  isInSale: boolean;
}

interface PlantCreationAttributes extends Optional<PlantAttributes, 'id'> {}

class Plant extends Model<PlantAttributes, PlantCreationAttributes> implements PlantAttributes {
  public id!: number;
  public name!: string;
  public subtitle!: string;
  public price!: number;
  public discountPercentage!: number | null;
  public description!: string;
  public features!: string;
  public imgUrl!: string;
  public isInSale!: boolean;

  // Métodos para relações muitos-para-muitos
  public addPlantTypes!: (plantTypes: number[] | PlantType[]) => Promise<void>;
  public getPlantTypes!: () => Promise<PlantType[]>;
  public setPlantTypes!: (plantTypes: number[] | PlantType[]) => Promise<void>;
  public removePlantTypes!: (plantTypes: number[] | PlantType[]) => Promise<void>;
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

      allowNull: false,
    },
    features: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    imgUrl: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    isInSale: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },
  },
  {
    sequelize,
    modelName: 'Plant',
    tableName: 'plants',
    timestamps: true,
  }
);

// Relacionamento muitos-para-muitos
Plant.belongsToMany(PlantType, {
  through: PlantTypePlant,
  foreignKey: 'plantId',
  as: 'plantTypes',

});

export default Plant;
