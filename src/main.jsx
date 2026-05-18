<<<<<<< HEAD
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import { ProductProvider } from "./context/ProductContext";
import { Toaster } from "react-hot-toast";

createRoot(document.getElementById("root")).render(
=======
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import { ProductProvider } from './context/ProductContext'

createRoot(document.getElementById('root')).render(
>>>>>>> c3a3d64 (AI manufactured crap :/)
  <StrictMode>
    <BrowserRouter>
      <ProductProvider>
        <App />
<<<<<<< HEAD
        <Toaster position="top-right" />
      </ProductProvider>
    </BrowserRouter>
  </StrictMode>,
);
=======
      </ProductProvider>
    </BrowserRouter>
  </StrictMode>,
)
>>>>>>> c3a3d64 (AI manufactured crap :/)
