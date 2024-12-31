# Loja do Groot

Bem-vindo à Loja do Groot! Este é um projeto de e-commerce para venda de plantas, desenvolvido com React, TypeScript e Vite.

## Índice

- [Sobre](#sobre)
- [Tecnologias](#tecnologias)
- [Instalação](#instalação)
- [Uso](#uso)
- [Estrutura do Projeto](#estrutura-do-projeto)

## Sobre

A Loja do Groot é um e-commerce fictício que oferece uma ampla variedade de plantas. O objetivo deste projeto é demonstrar habilidades em desenvolvimento front-end utilizando tecnologias modernas.

## Tecnologias

- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [Clerk](https://clerk.dev/) para autenticação
- [Swiper](https://swiperjs.com/) para carrosséis

## Instalação

Para rodar este projeto localmente, siga os passos abaixo:

1. Clone o repositório:

   ```sh
   git clone https://github.com/seu-usuario/loja-do-groot-web
   ```

2. Navegue até o diretório do projeto:

   ```sh
   cd loja-do-groot-web
   ```

3. Instale as dependências:

   ```sh
   npm install
   ```

4. Crie um arquivo

.env.local

na raiz do projeto e adicione sua chave de API do Clerk:

```env
VITE_CLERK_PUBLISHABLE_KEY=pk_test_sua_chave_aqui
```

5. Inicie o servidor de desenvolvimento:

   ```sh
   npm run dev
   ```

## Uso

Após iniciar o servidor de desenvolvimento, você pode acessar a aplicação em `http://localhost:5173`.

## Estrutura do Projeto

A estrutura do projeto é organizada da seguinte forma:

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

Este README fornece uma visão geral do projeto, instruções de instalação, uso, estrutura do projeto e informações sobre contribuição e licença.
