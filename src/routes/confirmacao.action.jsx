import { redirect } from "react-router-dom";
import { registrarCliente } from "../produtos";

export async function action({ request, params }) {
  const url = new URL(request.url);
  const parametrosSimulacao = {};

  parametrosSimulacao.produto_id = params.produtoId;
  parametrosSimulacao.cpf = url.searchParams.get("cpf");
  parametrosSimulacao.nome = url.searchParams.get("nome");
  parametrosSimulacao.email = url.searchParams.get("email");
  parametrosSimulacao.beneficio = url.searchParams.get("beneficio");
  parametrosSimulacao.data_nascimento = url.searchParams.get("dataNascimento");
  parametrosSimulacao.sexo = url.searchParams.get("sexo");
  parametrosSimulacao.prazo = url.searchParams.get("prazo");
  parametrosSimulacao.prazo_renda = url.searchParams.get("prazoRenda");
  parametrosSimulacao.prazo_certo_renda =
    url.searchParams.get("prazoCertoRenda");
  parametrosSimulacao.data_assinatura = new Date().toISOString().split("T")[0];
  try {
    await registrarCliente(parametrosSimulacao);
  } catch (e) {
    return redirect(`/contratar/falha`);
  }
  return redirect(`/contratar/sucesso`);
}
