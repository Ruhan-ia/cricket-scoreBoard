import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import CricketScoreBoard from './Cricket/CricketScoreBoard.jsx';
import {
  
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
const router = createBrowserRouter([
  {
    path: "/",
    element: <CricketScoreBoard></CricketScoreBoard>,
  },
]);

const queryClient = new QueryClient();


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
    <RouterProvider router={router}></RouterProvider>
    
    </QueryClientProvider>
  </React.StrictMode>,
)
