class Produto {
  constructor(id, nome, descricao) {
    this.id = id;
    this.nome = nome;
    this.descricao = descricao;
  }
  criarCard() {
    return (
      <div className="produto">
        <h2>{this.nome}</h2>
        <p>{this.descricao}</p>
      </div>
    );
  }
}

export async function loader() {
  const produtos = [
    new Produto(1, "Seguro de Vida", "Seguro de vida para você e sua família"),
    new Produto(
      2,
      "Seguro de Carro",
      "Seguro de carro para você e sua família"
    ),
    new Produto(3, "Seguro de Casa", "Seguro de casa para você e sua família"),
    new Produto(4, "Seguro de Moto", "Seguro de moto para você e sua família"),
  ];
  return produtos;
}
