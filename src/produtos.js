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
