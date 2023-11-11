import { pegarSimulacao, pegarProduto } from "../produtos";

export async function loader({ request, params }) {
  const url = new URL(request.url);
  const produto = await pegarProduto(params.produtoId);
  const parametros = {
    produto: produto.nome,
    dataNascimento: url.searchParams.get("dataNascimento"),
    sexo: url.searchParams.get("sexo"),
    prazo: url.searchParams.get("prazo"),
    prazoRenda: url.searchParams.get("prazoRenda"),
    prazoCertoRenda: url.searchParams.get("prazoCertoRenda"),
    beneficio: url.searchParams.get("beneficio"),
  };
  const simulacao = await pegarSimulacao(
    parametros.dataNascimento,
    parametros.sexo,
    parametros.prazo,
    parametros.prazoRenda != "null"
      ? {
          prazo: parametros.prazoRenda,
          prazo_certo: parametros.prazoCertoRenda,
        }
      : null,
    params.produtoId,
    parametros.beneficio
  );
  parametros.premio = simulacao.premio;
  return parametros;
}
