const URL = "http://127.0.0.1:5000";

export async function pegarProdutos() {
  let produtos = await fetch(`${URL}/produtos`)
    .then((data) => data.json())
    .catch((err) => console.log(err));
  return produtos ?? [];
}

export async function pegarProduto(produto_id) {
  let produtos = await fetch(`${URL}/produtos/${produto_id}`)
    .then((data) => data.json())
    .catch((err) => console.log(err));
  return produtos;
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
  let parametros = await fetch(`${URL}/produtos/parametros/${produtoId}`)
    .then((data) => data.json())
    .catch(() => {
      throw new Error(`Falha na comunicação com a API`);
    });
  return parametros;
}

export async function pegarSimulacao(
  dataNascimento,
  sexo,
  prazo,
  prazoRenda,
  produtoId,
  beneficio
) {
  const formData = new FormData();
  formData.append("data_nascimento", dataNascimento)
  formData.append("sexo", sexo)
  formData.append("prazo", prazo)
  if (prazoRenda) {
    formData.append("prazo_renda", prazoRenda.prazo)
    formData.append("prazo_certo_renda", prazoRenda.prazo_certo)
  }
  formData.append("produto_id", produtoId)
  formData.append("beneficio", beneficio)
  

  let simulacao = await fetch(`${URL}/simular`, {
    method: "post",
    body: formData,
  })
    .then((data) => data.json())
    .catch(() => {
      throw new Error(`Falha na comunicação com a API`);
    });
  return simulacao ?? null;
}
