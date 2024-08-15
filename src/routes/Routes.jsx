import { createBrowserRouter } from "react-router-dom";
import Products from "../pages/Products/Products";
import Root from "../layouts/Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Products></Products>,
      },
    ],
  },
]);

export default router;
