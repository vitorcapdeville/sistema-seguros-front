import { Link } from "react-router-dom";
import PropTypes from "prop-types";

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
Produto.propTypes = {
  id: PropTypes.number.isRequired,
  nome: PropTypes.string.isRequired,
  descricao: PropTypes.string.isRequired,
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
Root.propTypes = {
  produtos: PropTypes.arrayOf(Produto.propTypes).isRequired,
};
