import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, CreateBrowserRouter, RouterProvider } from 'react-router-dom';
import './output.css';
import App from './routes/App';
import ErrorPage from './routes/ErrorPage';
import ProjectPage, { SingleProject } from './routes/ProjectPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);