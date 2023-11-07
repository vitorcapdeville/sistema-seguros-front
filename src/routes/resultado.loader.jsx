import { pegarParametrosProduto } from "../produtos";

export async function loader({ request, params }) {
  const url = new URL(request.url);
  let sexo = url.searchParams.get("sexo");
  let dataNascimento = url.searchParams.get("dataNascimento");
  let { beneficio, prazos, prazos_renda } = await pegarParametrosProduto(
    params.produtoId
  );
  return {
    produtoId: params.produtoId,
    dataNascimento: dataNascimento,
    sexo: sexo,
    prazos: prazos,
    prazosRenda: prazos_renda,
    beneficioMinimo: beneficio.beneficio_minimo,
    beneficioMaximo: beneficio.beneficio_maximo,
  };
}
