import { pegarParametrosProduto, pegarSimulacao } from "../produtos";

export async function loader({ request, params }) {
  const url = new URL(request.url);
  let sexo = url.searchParams.get("sexo");
  let dataNascimento = url.searchParams.get("dataNascimento");
  let { prazos, prazos_renda } = await pegarParametrosProduto(params.produtoId);
  let simulacao = await pegarSimulacao(
    dataNascimento,
    sexo,
    prazos[0],
    prazos_renda[0],
    params.produtoId
  );
  return {
    produtoId: params.produtoId,
    dataNascimento: dataNascimento,
    sexo: sexo,
    prazos: prazos,
    prazosRenda: prazos_renda,
    premio: simulacao.premio,
  };
}
