import { redirect } from "react-router-dom";

export async function action({ request, params }) {
  const formData = await request.formData();
  const parametrosSimulacao = Object.fromEntries(formData);
  const url = new URL(request.url);
  url.searchParams.append("cpf", parametrosSimulacao.cpf);
  url.searchParams.append("nome", parametrosSimulacao.nome);
  url.searchParams.append("email", parametrosSimulacao.email);
  console.log(url);
  return redirect(`/contratar/${params.produtoId}/confirmar` + url.search);
  // try {
  //   await registrarCliente(parametrosSimulacao);
  // } catch (e) {
  //   return redirect(`/contratar/falha`);
  // }
  // return redirect(`/contratar/sucesso`);
}
