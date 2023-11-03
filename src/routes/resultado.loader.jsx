import {
  pegarFormula,
  pegarPrazos,
  pegarPrazosRenda,
  pegarSimulacao,
} from "../produtos";

export async function loader({ request, params }) {
  const url = new URL(request.url);
  let sexo = url.searchParams.get("sexo");
  let dataNascimento = url.searchParams.get("dataNascimento");
  let prazos = await pegarPrazos(params.produtoId);
  let prazosRenda = await pegarPrazosRenda(params.produtoId);
  let formula = await pegarFormula(params.produtoId);
  let simulacao = await pegarSimulacao(
    formula.formula,
    dataNascimento,
    sexo,
    prazos[0],
    prazosRenda[0],
    params.produtoId
  );
  return {
    formula: formula.formula,
    produtoId: params.produtoId,
    dataNascimento: dataNascimento,
    sexo: sexo,
    prazos: prazos,
    prazosRenda: prazosRenda,
    premio: simulacao.premio,
  };
}
