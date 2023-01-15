import { Route, Routes as ReactRoutes } from "react-router-dom";
import { Home } from "../pages/home";

export const Routes = () => {
  return (
    <ReactRoutes>
      <Route path="/" element={<Home />} />
    </ReactRoutes>
  );
};
