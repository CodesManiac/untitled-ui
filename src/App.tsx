import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './pages/dashboard';
import Error from './pages/error';
import Home from './pages/home';
import Settings from './pages/settings';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        path: 'home',
        element: <Home />,
      },
      {
        path: 'dashboard',
        element: <Dashboard />,
      },
      {
        path: 'settings',
        element: <Settings />,
      },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
