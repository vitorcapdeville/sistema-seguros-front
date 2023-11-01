import { redirect } from "react-router-dom";

export async function action({ request, params }) {
  const formData = await request.formData();
  const url = new URL(request.url);
  const parametrosSimulacao = Object.fromEntries(formData);
  parametrosSimulacao.produtoId = params.produtoId;
  parametrosSimulacao.dataNascimento = url.searchParams.get("dataNascimento");
  parametrosSimulacao.sexo = url.searchParams.get("sexo");
  try {
    console.log(parametrosSimulacao);
  } catch (e) {
    return redirect(`/contratar/falha`);
  }
  return redirect(`/contratar/sucesso`);
}
