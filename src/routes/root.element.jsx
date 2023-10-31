import { useLoaderData } from "react-router-dom";

export default function Root() {
  const produtos = useLoaderData();

  return (
    <>
      <h2>Bem vindo à Seguradora Digital</h2>
      <div className="lista-produtos">
        {produtos.length ? (
          produtos.map((produto) => produto.criarCard())
        ) : (
          <p>
            <i>Nenhum produto disponível.</i>
          </p>
        )}
      </div>
    </>
  );
}
