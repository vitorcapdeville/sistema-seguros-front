import { redirect } from "react-router-dom";

export async function action({ request, params }) {
  const formData = await request.formData();
  const url = new URL(request.url);
  const parametrosSimulacao = Object.fromEntries(formData);
  console.log(parametrosSimulacao.prazoRenda);
  let prazo = parametrosSimulacao.prazo;
  let prazoRenda =
    JSON.parse(parametrosSimulacao.prazoRenda ?? "{}").prazo_renda ?? null;
  let prazoCertRenda =
    JSON.parse(parametrosSimulacao.prazoRenda ?? "{}").prazo_certo_renda ??
    null;
  let sexo = url.searchParams.get("sexo");
  let dataNascimento = url.searchParams.get("dataNascimento");

  return redirect(
    `/simular/${params.produtoId}/contratar?dataNascimento=${dataNascimento}&sexo=${sexo}&prazo=${prazo}&prazoRenda=${prazoRenda}&prazoCertoRenda=${prazoCertRenda}`
  );
}
