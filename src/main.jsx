import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/root.element";
import Simulacao from "./routes/simulacao.element";
import { action as simulacaoAction } from "./routes/simulacao.action";
import Resultado from "./routes/resultado.element";
import { action as resultadoAction } from "./routes/resultado.action";
import { loader as resultadoLoader } from "./routes/resultado.loader";
import { pegarProdutos } from "./produtos";
import InfoPessoal from "./routes/infopessoal.element";
import { action as infoPessoalAction } from "./routes/infopessoal.action";

// TODO: Incluir paginas de erro.

const produtos = await pegarProdutos();

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root produtos={produtos} />,
  },
  {
    path: "/simular/:produtoId",
    element: <Simulacao />,
    action: simulacaoAction,
  },
  {
    path: "/simular/:produtoId/resultado",
    element: <Resultado />,
    loader: resultadoLoader,
    action: resultadoAction,
  },
  {
    path: "/simular/:produtoId/contratar",
    element: <InfoPessoal />,
    action: infoPessoalAction,
  },
  {
    path: "/contratar/sucesso",
    element: <div>Contratação realizada com sucesso!</div>,
  },
  {
    path: "/contratar/falha",
    element: <div>Contratação falhou!</div>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
