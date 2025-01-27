import { Navigate, Route, Routes } from "react-router-dom";
import { routes } from "./routes";

export const AppRouter = () => {
  return (
    <Routes>
      {routes.map(({ to, path, Component }) => (
        <Route key={to} path={path} element={<Component />} />
      ))}

      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  );
};
