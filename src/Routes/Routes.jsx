import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import Homepage from "../HomePage/Homepage";
import Profile from "../Profile/Profile";
import ErrorPage from "../ErrorPage/ErrorPage";

export const router = createBrowserRouter([
  { path: '/', 
    element: <MainLayout />,
    children:[
      {
        index: true, 
        element: <Homepage />
      }, 
      {
        path: '/Profile',
        element: <Profile />
      }, 
      
    ], 
    errorElement: <ErrorPage />
  },
]);