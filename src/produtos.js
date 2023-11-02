export async function pegarProdutos() {
  let produtos = await fetch("http://127.0.0.1:5000/produtos")
    .then((data) => data.json())
    .catch((err) => console.log(err));
  return produtos ?? [];
}
