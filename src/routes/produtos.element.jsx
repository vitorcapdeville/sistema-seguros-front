import { Link } from "react-router-dom";

const Produto = ({ id, nome, descricao }) => {
  return (
    <Link to={`simular/${id}`}>
      <li className="p-2 m-2 border hover:border-gray-900 border-gray-300 text-left text-sm flex flex-col justify-between rounded-md scale-90 hover:scale-100 transition duration-500 ease-in-out min-h-full">
        <h2 className="text-center text-lg font-bold">{nome}</h2>
        <p>{descricao}</p>
      </li>
    </Link>
  );
};

export default function Produtos({ produtos }) {
  if (produtos.length === 0) {
    throw new Error(
      "Nenhum produto disponível, talvez o servidor esteja fora do ar."
    );
  }
  return (
    <>
      <h2 className="text-2xl font-bold text-center">Escolha o seu produto</h2>
      <ul
        className={`grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 h-auto grid-auto-rows minmax(100px, auto)`}
      >
        {produtos.map((produto) => (
          <Produto
            key={produto.id}
            id={produto.id}
            nome={produto.nome}
            descricao={produto.descricao}
          />
        ))}
      </ul>
    </>
  );
}
