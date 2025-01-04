
import { Sequelize } from 'sequelize';

const storagePath = "./database.db"; 

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: storagePath
});

export default sequelize;
