import { redirect } from "react-router-dom";

export async function action({ request, params }) {
  const formData = await request.formData();
  const parametrosSimulacao = Object.fromEntries(formData);
  const url = new URL(request.url);
  url.searchParams.set("cpf", parametrosSimulacao.cpf);
  url.searchParams.set("nome", parametrosSimulacao.nome);
  url.searchParams.set("email", parametrosSimulacao.email);
  console.log(url);
  return redirect(`/contratar/${params.produtoId}/confirmar` + url.search);
}
