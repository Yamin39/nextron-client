import { createBrowserRouter } from "react-router-dom";
import Products from "../pages/Products/Products";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Root from "../layouts/Root";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      // product route
      {
        path: "/",
        element: (
          <PrivateRoute>
            <Products></Products>
          </PrivateRoute>
        ),
      },
      // login route
      {
        path: "/login",
        element: <Login></Login>,
      },
      // register route
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);

export default router;
