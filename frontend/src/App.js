import { Router } from "./routes";
import Global from "./styles/global";
import { RouterProvider } from "react-router-dom";
export const App = () => {
  return (
    <>
      <Global />
      <RouterProvider router={Router} />
    </>
  );
};
