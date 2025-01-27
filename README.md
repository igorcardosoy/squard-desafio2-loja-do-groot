# Groot's Store

Welcome to Groot's Store! This is an e-commerce project for selling plants, developed with React, TypeScript, and Vite.

This README provides an overview of the project, installation instructions, usage, and project structure.

## Table of Contents

- [About](#about)
- [Technologies Used](#technologies-used)
- [Requirements](#requirements)
- [Downloading the Application Files](#downloading-the-application-files)
- [Running the Frontend Application](#running-the-frontend-application)
- [Running the Backend Application](#running-the-backend-application)
- [Usage](#usage)
- [Project Structure (Frontend)](#project-structure-frontend)
- [Project Structure (Backend)](#project-structure-backend)

## About

Groot's Store is a fictional e-commerce offering a wide variety of plants. The goal of this project is to demonstrate full-stack development skills using modern technologies.

## Technologies Used

- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)
- [Sequelize](https://sequelize.org/)
- [MySQL](https://www.mysql.com/)
- [Yup](https://www.npmjs.com/package/yup)
- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [Clerk](https://clerk.dev/) para autenticação
- [Swiper](https://swiperjs.com/) para carrosséis
- [Axios](https://axios-http.com/) para requisições HTTP
- [React Hook Form](https://react-hook-form.com/) para gerenciamento de formulários
- [Zod](https://zod.dev/) para validação de esquemas
- [React Router](https://reactrouter.com/) para roteamento
- [React Loading Indicators](https://www.npmjs.com/package/react-loading-indicators) para indicadores de carregamento

## Requirements

You must have the following installed on your machine:

- An IDE (preferably VS Code)
- Node.js (recommended version 22.9.0 or newer)
- Git (for cloning the project)

## Downloading the Application Files

Clone the GitHub repository:

```sh
git clone https://github.com/<your-user-name>/squard-desafio2-loja-do-groot.git
```

## Running the Backend Application

1. Navigate to the project directory:

   ```sh
   cd loja-do-groot-api
   ```

2. Install dependencies:

   ```sh
   npm install
   ```

3. Create database in MySQL:

   ```sql
   CREATE DATABASE IF NOT EXISTS plant_store;
   ```

4. Create a `.env` file in the project root and add your database connection information and server port:

   ```env
   DB_NAME=plant_store
   DB_USER=db_user
   DB_PASSWORD=db_password
   DB_HOST=db_host
   DB_PORT=db_port
   PORT=port of the server
   ```

5. Start the server:

   ```sh
   npm start
   ```

## Running the Frontend Application

To run the project's frontend locally, follow these steps:

1. Navigate to the project directory:

   ```sh
   cd loja-do-groot-web
   ```

2. Install all dependencies:

   ```sh
   npm install
   ```

3. Create a `.env.local` file in the project root and add your Clerk API key and Store url API:

   ```env
   VITE_CLERK_PUBLISHABLE_KEY=pk_test_your_key_here
   VITE_LOJA_DO_GROOT_API_URL=loja-do-groot-api-url
   ```

4. Start the development server:

   ```sh
   npm run dev
   ```

## Usage

After starting the development server, you can access the application at `http://localhost:5173`.

## Project files structure (Frontend)

The frontend structure is organized as follows:

```
loja-do-groot-web/
├── .env.local
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── public/
├── README.md
├── src/
│   ├── App.css
│   ├── App.tsx
│   ├── assets/
│   │   ├── icons/
│   │   │   ├── fertilizer.svg
│   │   │   ├── sun.svg
│   │   │   ├── water.svg
│   │   ├── images/
│   │   │   ├── left_plant.png
│   │   │   ├── right_plant.png
│   ├── components/
│   │   ├── AboutUsCard.tsx
│   │   ├── Button.tsx
│   │   ├── ColumnText.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── Icon.tsx
│   │   ├── Input.tsx
│   │   ├── Navbar.tsx
│   │   ├── PlantCard.tsx
│   │   ├── PlantContainer.tsx
│   │   ├── TakeCareOfYourPlants.tsx
│   │   ├── TextArea.tsx
│   │   ├── TextContainer.tsx
│   │   ├── Title.tsx
│   ├── hooks/
│   │   └── useFetchPlants.ts
│   ├── models/
│   │   └── Plant.ts
│   ├── pages/
│   │   ├── AboutUs.tsx
│   │   ├── Home.tsx
│   │   ├── LoginPage.tsx
│   │   ├── Product.tsx
│   │   ├── Products.tsx
│   │   ├── Register.tsx
│   ├── services/
│   │   └── plantService.ts
│   ├── styles/
│   │   ├── AboutUs.css
│   │   ├── AboutUsCard.css
│   │   ├── Button.css
│   │   ├── ColumnText.css
│   │   ├── Footer.css
│   │   ├── Hero.css
│   │   ├── Home.css
│   │   ├── Icon.css
│   │   ├── Input.css
│   │   ├── LoginPage.css
│   │   ├── Navbar.css
│   │   ├── PlantCard.css
│   │   ├── PlantContainer.css
│   │   ├── Product.css
│   │   ├── Products.css
│   │   ├── Register.css
│   │   ├── TakeCareOfYourPlants.css
│   │   ├── TextArea.css
│   │   ├── TextContainer.css
│   │   ├── Title.css
│   ├── validation/
│   │   └── plantSchema.ts
│   ├── App.tsx
│   ├── App.css
│   ├── index.tsx
│   ├── index.css
│   ├── Router.tsx
│   ├── vite-env.d.ts
│   └── ...
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
├── vite.config.ts
```

## Project files structure (Backend)

The backend structure is organized as follows:

```
loja-do-groot-api/
├── .env
├── .gitignore
├── routes-infos.md
├── tsconfig.json
├── src/
│   ├── app.ts
│   ├── database.db
│   ├── package-lock.json
│   ├── package.json
│   ├── config/
│   │   ├── dbConfig.ts
│   ├── controllers/
│   │   ├── plantController.ts
│   │   ├── plantTypeController.ts
│   ├── middlewares/
│   │   ├── validationMiddleware.ts
│   ├── models/
│   │   ├── Associations.ts
│   │   ├── Plant.ts
│   │   ├── PlantType.ts
│   │   ├── PlantTypePlant.ts
│   ├── routes/
│   │   ├── plant-types-routes.ts
│   │   ├── plant.routes.ts
```

To access the backend routes documentation, [click here](./loja-do-groot-api/README.md).
