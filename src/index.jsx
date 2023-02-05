import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter, createRoutesFromElements,
  RouterProvider,Route
} from "react-router-dom";

import Main from './pages/main'
import Home from './pages/home'
import About from './pages/about'
import ErrorPage from './pages/errorpage'
import Logement from './pages/logement'

import "./index.css";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route exact path="/" element= { <Main /> } >
      <Route path="*" element={<ErrorPage />} />
      <Route path="/" element= { <Home/> } />
      <Route path="/About" element={ <About/> } />
      <Route path="/Logement/:id" element={ <Logement/> } errorElement={<ErrorPage />}/>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
<React.StrictMode>
  <RouterProvider router={router} />
</React.StrictMode>
);