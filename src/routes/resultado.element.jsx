import { Form, useLoaderData, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Resultado() {
  const parametrosSimulacao = useLoaderData();
  const navigate = useNavigate();
  const [prazo, setPrazo] = useState(parametrosSimulacao.prazos[0]);

  const handleChange = (e) => {
    setPrazo(e.target.value);
  };

  return (
    <div className="content-simulacao">
      <h2>Resultado da Simulação</h2>
      <p>
        Simulado o produto {parametrosSimulacao.produtoId} para um cliente
        nascido em {parametrosSimulacao.dataNascimento} do sexo{" "}
        {parametrosSimulacao.sexo} por {prazo} anos.
      </p>
      <Form method="post">
        <select id="prazo" name="prazo" onChange={handleChange} value={prazo}>
          {parametrosSimulacao.prazos.length ? (
            parametrosSimulacao.prazos.map((prazo) => (
              <option key={prazo} value={prazo}>
                {prazo} anos
              </option>
            ))
          ) : (
            <option>Falha ao buscar os prazos</option>
          )}
        </select>
        <button type="submit" id="contratar" className="botao-simular">
          Contratar
        </button>
        <button
          type="button"
          className="botao-simular"
          onClick={() => {
            navigate(-1);
          }}
        >
          Voltar
        </button>
      </Form>
    </div>
  );
}
