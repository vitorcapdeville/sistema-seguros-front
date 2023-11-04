const URL = "http://127.0.0.1:5000";

export async function pegarProdutos() {
  let produtos = await fetch(`${URL}/produtos`)
    .then((data) => data.json())
    .catch((err) => console.log(err));
  return produtos ?? [];
}

export async function registrarCliente(dados) {
  const formData = new FormData();
  Object.keys(dados).forEach((key) => formData.append(key, dados[key]));

  const response = await fetch(`${URL}/contratar`, {
    method: "post",
    body: formData,
  });

  if (!response.ok) {
    const errorMessage = await response.text();
    throw new Error(errorMessage);
  }

  return response.json();
}

export async function pegarParametrosProduto(produtoId) {
  let parametros = await fetch(`${URL}/produtos/${produtoId}`)
    .then((data) => data.json())
    .catch((err) => console.log(err));
  return parametros;
}

export async function pegarSimulacao(
  dataNascimento,
  sexo,
  prazo,
  prazoRenda,
  produtoId
) {
  let query_params = `data_nascimento=${dataNascimento}&sexo=${sexo}&prazo=${prazo}&produto_id=${produtoId}`;
  query_params += prazoRenda
    ? `&prazo_renda=${prazoRenda.prazo}&prazo_certo_renda=${prazoRenda.prazo_certo}`
    : "";

  let simulacao = await fetch(`${URL}/simular?${query_params}`)
    .then((data) => data.json())
    .catch((err) => console.log(err));
  return simulacao ?? null;
}
