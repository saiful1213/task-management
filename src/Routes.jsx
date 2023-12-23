import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Home from "./pages/Home/Home/Home";
import Error from "./pages/Error";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Dashboard from "./pages/Dashboard/Dashboard/Dashboard";
import PrivateRoute from "./PrivateRoute";
import DashboardHome from "./pages/Dashboard/DashboardHome";
import UserHome from "./pages/Dashboard/UserHome";
import AddTask from "./pages/Dashboard/AddTask";

const Routes = createBrowserRouter([
   {
      path: '/',
      element: <Root></Root>,
      errorElement: <Error></Error>,
      children: [
         {
            path: '/',
            element: <Home></Home>
         }
      ]
   },
   {
      path: '/login',
      element: <Login></Login>
   },
   {
      path: '/register',
      element: <Register></Register>
   },
   {
      path: 'dashboard',
      element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
      children: [
         {
            path: '/dashboard',
            element: <DashboardHome></DashboardHome>
         },
         {
            path: 'userHome',
            element: <UserHome></UserHome>
         },
         {
            path: 'addTask',
            element: <AddTask></AddTask>
         },
      ]
   }
])

export default Routes;