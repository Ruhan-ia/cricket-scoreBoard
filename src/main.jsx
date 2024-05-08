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
import Main from './Main/Main.jsx';
import News from './News/News.jsx';
import SignUp from './SignUp/SignUp.jsx';
import AuthProvider from './Provider/AuthProvider.jsx';
import Login from './SignUp/Login/Login.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path:'/',
        element:<CricketScoreBoard></CricketScoreBoard>
      },
      {
        path:'/news',
        element:<News></News>
      },
       {
        path:'/login',
        element:<Login></Login>
       },
      {
        path:'/signUp',
        element:<SignUp></SignUp>
      }
    ]
  },
]);

const queryClient = new QueryClient();


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <AuthProvider>
   <QueryClientProvider client={queryClient}>
    <RouterProvider router={router}></RouterProvider>
    
    </QueryClientProvider>
   </AuthProvider>
  </React.StrictMode>,
)
