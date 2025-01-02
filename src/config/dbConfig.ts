
import { Sequelize } from 'sequelize';
import path from 'path';

const storagePath = "./database.db"; 

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: storagePath,
  logging: true
});

export default sequelize;
