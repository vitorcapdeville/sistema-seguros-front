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

export async function pegarPrazos(produtoId) {
  let prazos = await fetch(`${URL}/prazos?produto_id=${produtoId}`)
    .then((data) => data.json())
    .catch((err) => console.log(err));
  return prazos ?? [];
}

export async function pegarPrazosRenda(produtoId) {
  let prazos = await fetch(`${URL}/prazos_renda?produto_id=${produtoId}`)
    .then((data) => data.json())
    .catch((err) => console.log(err));
  return prazos ?? [];
}

export async function pegarFormula(produtoId) {
  let formula = await fetch(`${URL}/formula?produto_id=${produtoId}`)
    .then((data) => data.json())
    .catch((err) => console.log(err));
  return formula ?? null;
}

export async function pegarSimulacao(
  formula,
  dataNascimento,
  sexo,
  prazo,
  prazoRenda,
  produtoId
) {
  let query_params = `data_nascimento=${dataNascimento}&sexo=${sexo}&prazo=${prazo}&produto_id=${produtoId}`;
  switch (formula) {
    case "peculio":
      break;
    case "aposentadoria":
      query_params += `&prazo_renda=${prazoRenda.prazo_renda}&prazo_certo_renda=${prazoRenda.prazo_certo_renda}`;
      break;
    default:
      throw new Error("Fórmula inválida");
  }
  let simulacao = await fetch(`${URL}/simular/${formula}?${query_params}`)
    .then((data) => data.json())
    .catch((err) => console.log(err));
  return simulacao ?? null;
}
