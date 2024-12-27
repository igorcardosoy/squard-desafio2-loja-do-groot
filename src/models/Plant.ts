import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from '../config/dbConfig';

// Interface para os atributos da planta
interface PlantAttributes {
  id: number;
  name: string;
  subtitle: string;
  price: number;
  discountPercentage: number | null;
  description: string;
  imgUrl: string;
  plantTypeId: number;
}

// Interface para os atributos opcionais na criação
interface PlantCreationAttributes extends Optional<PlantAttributes, 'id'> {}

// Modelo Sequelize para a tabela de plantas
class Plant extends Model<PlantAttributes, PlantCreationAttributes> implements PlantAttributes {
  public id!: number;
  public name!: string;
  public subtitle!: string;
  public price!: number;
  public discountPercentage!: number | null;
  public description!: string;
  public imgUrl!: string;
  public plantTypeId!: number;
}

// Inicialização do modelo
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
    imgUrl: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    plantTypeId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'Plant',
    tableName: 'plants',
    timestamps: true, // Adiciona colunas createdAt e updatedAt
  }
);

export default Plant;
