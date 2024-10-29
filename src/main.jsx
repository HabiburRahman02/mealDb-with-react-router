import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './layout/Main/Main';
import './index.css'
import Meals from './components/Meals';
import MealDetails from './components/MealDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <div>error</div>,
    children: [
      {
        path: '/meals',
        element: <Meals></Meals>,
        loader: () => fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=b')
      },
      {
        path: '/meal/:id',
        element: <MealDetails></MealDetails>,
        loader: ({ params }) => fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.id}`)
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
