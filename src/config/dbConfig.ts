
import { Sequelize } from 'sequelize';
import path from 'path';

const storagePath = path.join(__dirname, '..', 'database.sqlite'); 

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: storagePath,
  logging: true
});

export default sequelize;