import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import Homepage from "../HomePage/Homepage";
import Profile from "../Profile/Profile";
import Timeline from "../Timeline/Timeline";
import Stats from "../Stats/Stats";
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
      {
        path: '/timeline',
        element: <Timeline />
      },
      {
        path: '/stats',
        element: <Stats />
      },
    ], 
    errorElement: <ErrorPage />
  },
]);