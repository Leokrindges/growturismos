import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "../../pages/Home";
import { Planos } from "../../pages/Planos";
import { QuemSomos } from "../../pages/QuemSomos";
import { Servicos } from "../../pages/Servicos";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/",
    element: <Planos />,
  },
  {
    path: "/",
    element: <QuemSomos />,
  },
  {
    path: "/",
    element: <Servicos />,
  },
]);

export function AppRoutes() {
  return <RouterProvider router={router} />;
}
