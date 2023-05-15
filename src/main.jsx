import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AddChocolate from './components/AddChocolate.jsx';
import UpadateChocolate from './components/UpadateChocolate.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
  },
  {
    path: "/addChocolate",
    element: <AddChocolate></AddChocolate>
  },
  {
    path: "/updateChocolate",
    element: <UpadateChocolate></UpadateChocolate>
  }
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
