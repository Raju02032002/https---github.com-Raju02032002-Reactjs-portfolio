import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import About from './Pages/About';
import Home from './Pages/Home';
import Navbar from './Component/Navbar';
import Skills from './Pages/Skills';
import Project from './Pages/Project';
import Contact from './Pages/Contact';

import './App.css';

const router = createBrowserRouter([
  {
    path: "/", // Main path
    element: <Navbar />, // Navbar is always displayed
    children: [
      {
        path: "/", // Home page
        element: <Home />,
      },
      {
        path: "about", // About page
        element: <About />,
      },
      {
        path: "skills", // Skills page
        element: <Skills />,
      },
      {
        path: "project", // Project page
        element: <Project />,
      },
      {
        path: "contact", // Contact page
        element: <Contact />,
      },
      {
        path:"https://www.linkedin.com/in/raj-kumar47/",
        element:<About></About>
      },
      {
        path:"https://github.com/Raju02032002",
        element:<About></About>
      }
    ],
  },
]);

const App = () => {
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
};

export default App;
