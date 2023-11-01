import { redirect } from "react-router-dom";

export async function action({ request, params }) {
  const formData = await request.formData();
  const parametrosSimulacao = Object.fromEntries(formData);
  return redirect(
    `/simular/${params.produtoId}/resultado?dataNascimento=${parametrosSimulacao.dataNascimento}&sexo=${parametrosSimulacao.sexo}`
  );
}
