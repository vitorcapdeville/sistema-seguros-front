import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/root.element";
import { loader as rootLoader } from "./routes/root.loader";
import Simulacao from "./routes/simulacao.element";
import Resultado from "./routes/resultado.element";
import { action as resultadoAction } from "./routes/resultado.action";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    loader: rootLoader,
  },
  {
    path: "/simular/:produtoId",
    element: <Simulacao />,
  },
  {
    path: "/simular/:produtoId/resultado",
    element: <Resultado />,
    action: resultadoAction,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
