import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LivroDados from './LivroDados';
import LivroLista from './LivroLista';
import ErrorPage from './modelo/paginaerro';

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <ErrorPage />,
    children:[
    {
      path: "/dados",
      element: <LivroDados
        titulo=""
        resumo =""
        autores =""
        
      />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/lista",
      element: <LivroLista/>,
      errorElement: <ErrorPage />,
    },
  ],
}
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
