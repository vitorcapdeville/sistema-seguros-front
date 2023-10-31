export async function action({ request, params }) {
  const formData = await request.formData();
  const parametrosSimulacao = Object.fromEntries(formData);
  parametrosSimulacao.produtoId = params.produtoId;
  return parametrosSimulacao;
}
