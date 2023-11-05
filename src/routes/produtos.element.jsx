import { Link } from "react-router-dom";

const Produto = ({ id, nome, descricao }) => {
  return (
    <Link to={`simular/${id}`}>
      <li className="w-64 p-2 border hover:border-gray-900 border-gray-300 text-left m-2 text-sm flex flex-col justify-between h-full rounded-md scale-90 hover:scale-100 transition duration-500 ease-in-out">
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
    <div className="mx-4">
      <h2 className="text-2xl font-bold text-center mb-4">
        Escolha o seu produto
      </h2>
      <ul className="mt-5 grid grid-cols-3">
        {produtos.map((produto) => (
          <Produto
            key={produto.id}
            id={produto.id}
            nome={produto.nome}
            descricao={produto.descricao}
          />
        ))}
      </ul>
    </div>
  );
}
