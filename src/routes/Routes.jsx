import { createBrowserRouter } from "react-router-dom";
import Products from "../pages/Products/Products";
import Login from "../pages/Login/Login";

import Root from "../layouts/Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      // product route
      {
        path: "/",
        element: <Products></Products>,
      },
      // login route
      {
        path: "/login",
        element: <Login></Login>,
      },
    ],
  },
]);

export default router;
