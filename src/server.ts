import app from './app';
import sequelize from './config/dbConfig';
import User from './models/User';
import Plant from './models/Plant';
import PlantType from './models/PlantType';

const PORT = process.env.PORT || 3000;

const models = [User, Plant, PlantType];

sequelize.sync({ alter: true }) 
  .then(() => {
    console.log('Banco de dados sincronizado com sucesso.');
    app.listen(PORT, () => {
      console.log(`Servidor rodando na porta ${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Erro ao sincronizar o banco de dados:', error);
    process.exit(1);
  });
