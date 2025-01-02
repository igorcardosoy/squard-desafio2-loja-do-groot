import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import plantRoutes from './routes/plantRoutes';

import sequelize from './config/dbConfig'; 
import Plant from './models/Plant';
import PlantType from './models/PlantType';


app.use(cors());
app.use(express.json());

app.use('/api/plants', plantRoutes);

const startServer = async () => {
  try {
    await sequelize.authenticate();
    console.log('Conexão com o banco de dados estabelecida com sucesso.');

    await sequelize.sync({ alter: true }); 
    console.log('Modelos sincronizados com o banco de dados.');

    app.listen(PORT, () => {
      console.log(`Servidor rodando na porta ${PORT}`);
    });
  } catch (error) {
    console.error('Erro ao conectar com o banco de dados:', error);
    process.exit(1);
  }
};

startServer();

export default app;

