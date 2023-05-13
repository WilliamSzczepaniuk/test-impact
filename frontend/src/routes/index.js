import { Home } from "../pages/Home/home";
import { createBrowserRouter } from "react-router-dom";
import { Presentation } from "../pages/Presentation/presentation";
export const Router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: ":id",
    element: <Presentation />,
  },
]);
