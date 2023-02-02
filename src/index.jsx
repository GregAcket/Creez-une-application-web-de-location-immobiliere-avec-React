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
      <Route path="/" element= { <Home/> } />
      <Route path="/About" element={ <About/> } />
      <Route path="/Logement/:id" element={ <Logement/> } />
      <Route path="*" element={<ErrorPage />} />

      
    </Route>
  )
);




/*

const router = createBrowserRouter([
  {
    path: "/",
    element: <Header />,
    errorElement : <ErrorPage />,
    children: [
      {
        path:"/",
        element:<Home />
      },
      {
        path: "about",
        element: <About/>,
      },
    ],
  },
  {
    path: "{/}",
    element: <Footer />,
  }
]);


*/


ReactDOM.createRoot(document.getElementById("root")).render(
<React.StrictMode>
  <RouterProvider router={router} />
</React.StrictMode>
);

