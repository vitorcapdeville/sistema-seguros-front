export async function loader({ request, params }) {
  const url = new URL(request.url);
  return {
    produtoId: params.produtoId,
    dataNascimento: url.searchParams.get("dataNascimento"),
    sexo: url.searchParams.get("sexo"),
    prazos: [10, 20, 30],
  };
}
