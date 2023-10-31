import { useActionData } from "react-router-dom";

export default function Resultado() {
  const parametrosSimulacao = useActionData();
  return (
    <div className="content-simulacao">
      <h2>Resultado da Simulação</h2>
      <p>
        Simulado o produto {parametrosSimulacao.produtoId} para um cliente
        nascido em {parametrosSimulacao.dataNascimento} do sexo{" "}
        {parametrosSimulacao.sexo}.
      </p>
    </div>
  );
}
