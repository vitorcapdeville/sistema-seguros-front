import { Link } from "react-router-dom";

const Produto = ({ id, nome, descricao }) => {
  return (
    <Link to={`simular/${id}`}>
      <div className="produto">
        <h2>{nome}</h2>
        <p>{descricao}</p>
      </div>
    </Link>
  );
};

export default function Root({ produtos }) {
  return (
    <>
      <h2>Bem vindo à Seguradora Digital</h2>
      <div className="lista-produtos">
        {produtos.length ? (
          produtos.map((produto) => (
            <Produto
              key={produto.id}
              id={produto.id}
              nome={produto.nome}
              descricao={produto.descricao}
            />
          ))
        ) : (
          <p>
            <i>Nenhum produto disponível.</i>
          </p>
        )}
      </div>
    </>
  );
}
