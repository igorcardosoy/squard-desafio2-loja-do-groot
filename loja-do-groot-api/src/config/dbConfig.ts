import dotenv from 'dotenv'
import mysql from 'mysql2/promise'
import { Sequelize } from 'sequelize'

dotenv.config()

const sequelize = new Sequelize({
  dialect: 'mysql',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  logging: false,
  pool: {
    max: 10,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
  define: {
    timestamps: true,
    underscored: true,
  },
})

const createDatabase = async () => {
  try {
    const connection = await mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      port: Number(process.env.DB_PORT),
      password: process.env.DB_PASSWORD,
    })

    await connection.query(
      `CREATE DATABASE IF NOT EXISTS ${process.env.DB_NAME}`
    )
    console.log('Database created successfully.')

    await connection.end()
  } catch (error) {
    console.error('Error creating database:', error)
    throw error
  }
}

export const startDatabase = async () => {
  try {
    await createDatabase()

    await sequelize.authenticate()
    console.log('Connection to the database has been established successfully.')

    await sequelize.sync()
    console.log('Models synchronized with the database.')
  } catch (error) {
    console.error('Unable to connect to the database:', error)
    process.exit(1)
  }
}

export default sequelize
