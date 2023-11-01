import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/root.element";
import { loader as rootLoader } from "./routes/root.loader";
import Simulacao from "./routes/simulacao.element";
import { action as simulacaoAction } from "./routes/simulacao.action";
import Resultado from "./routes/resultado.element";
// import { action as resultadoAction } from "./routes/resultado.action";
import { loader as resultadoLoader } from "./routes/resultado.loader";

// TODO: Incluir paginas de erro.
// Quando fizemos solicitacao, mandamos uma action com os dados, e carregamos. Essa é a melhor forma de fazer?
// O problema com isso é que quando o usuario atualiza a pagina, ele perde os dados e da erro. Sera q eu deveria passar
// os dados na URL ao inves de usar um form? Eu nao sei como q eu pegaria os dados do usuario e inseriria na URL...

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    loader: rootLoader,
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
    // action: resultadoAction,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
