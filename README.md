
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
- [SQLite](https://www.sqlite.org/)
- [Yup](https://www.npmjs.com/package/yup)
- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [Clerk](https://clerk.dev/)
- [Swiper](https://swiperjs.com/)

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

3. Create a `.env.local` file in the project root and add your Clerk API key:

   ```env
   VITE_CLERK_PUBLISHABLE_KEY=pk_test_your_key_here
   ```

4. Start the development server:

   ```sh
   npm run dev
   ```

## Running the Backend Application

1. Navigate to the project directory:

   ```sh
   cd loja-do-groot-api/src
   ```

2. Install dependencies:

   ```sh
   npm install
   ```

3. Start the server:

   ```sh
   npm start
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
│   ├── components/
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── Navbar.tsx
│   │   ├── PlantCard.tsx
│   │   ├── PlantContainer.tsx
│   │   ├── Router.tsx
│   │   ├── Title.tsx
│   ├── index.css
│   ├── main.tsx
│   ├── pages/
│   │   ├── AboutUs.tsx
│   │   ├── Home.tsx
│   │   ├── LoginPage.tsx
│   │   ├── Product.tsx
│   │   ├── Products.tsx
│   │   ├── Register.tsx
│   ├── styles/
│   │   ├── Footer.css
│   │   ├── Hero.css
│   │   ├── Home.css
│   │   ├── LoginPage.css
│   │   ├── Navbar.css
│   │   ├── PlantCard.css
│   │   ├── PlantContainer.css
│   ├── vite-env.d.ts
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
