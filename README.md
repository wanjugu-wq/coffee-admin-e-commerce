<<<<<<< HEAD
# Brew and Bean Co. Coffee Admin Portal

A modern **React Single Page Application (SPA)** for managing a coffee shop’s products.  
Built as part of a frontend development summative lab to demonstrate React concepts like hooks, routing, state management, and API integration.

---

## Preview

> A tavern-inspired coffee shop admin dashboard with a light, modern UI.

- Landing page with branding
- Product preview page
- Add/Edit products
- Dynamic product details pages
- Search functionality
- Category filtering
- Responsive design

---

## Features

### Home Page
- Café-style hero section
- Brand storytelling
- Call-to-action buttons

### Product Management
- View all store products
- Dynamic product cards
- Edit product price
- Delete products (optional extension)

### Add Product
- Controlled form inputs
- Add new products to database
- Slug generation for routing

### Search
- Live search filtering by product name

### Product Details
- Dynamic routing using `:slug`
- Full product information view

### Responsive UI
- Mobile-first design
- Tailwind CSS styling

---

## Tech Stack

- React (Vite)
- React Router DOM
- Tailwind CSS
- Context API
- JSON Server (mock backend)
- JavaScript (ES6+)
- Lucid icons
- Jest

---

## 📁 Project Structure

```txt
src/
 ├── components/
 │    ├── Navbar.jsx
 │    ├── Footer.jsx
 │    ├── ProductCard.jsx
 │    ├── SearchBar.jsx
 │    ├──Hero.jsx
      └── __tests__/
          ├── CategoryFilter.test.jsx
          ├── ProductCard.test.jsx
          ├── SearchBar.test.jsx
          ├── Navbar.jsx
          ├── Navbar.jsx
          ├── Navbar.jsx
 │
 ├── pages/
 │    ├── Home.jsx
 │    ├── Products.jsx
 │    ├── AddProduct.jsx
 │    ├── ProductDetails.jsx
      └── __tests__/
          ├── AddProduct.test.jsx
          ├── ProductDetails.test.jsx
 ├── api/
     └── api.js
 ├── context/
 │    └── ProductContext.jsx
 ├── App.jsx
 ├── main.jsx
 └── index.css
=======
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
>>>>>>> c3a3d64 (AI manufactured crap :/)
