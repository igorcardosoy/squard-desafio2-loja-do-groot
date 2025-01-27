import cors from 'cors'
import dotenv from 'dotenv'
import express from 'express'
import plantTypesRoutes from './routes/plant-types.routes'
import plantRoutes from './routes/plant.routes'

import { startDatabase } from './config/dbConfig'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 3000

app.use(cors())
app.use(express.json())

app.use('/plants', plantRoutes)
app.use('/plant-types', plantTypesRoutes)

const startServer = async () => {
  try {
    await startDatabase()

    app.listen(PORT, () => {
      console.log(`Servidor rodando na porta ${PORT}`)
    })
  } catch (error) {
    console.error('Erro ao conectar com o banco de dados:', error)
    process.exit(1)
  }
}

startServer()

export default app
