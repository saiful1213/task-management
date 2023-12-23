import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Home from "./pages/Home/Home/Home";
import Error from "./pages/Error";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";

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
      // element: 
   }
])

export default Routes;