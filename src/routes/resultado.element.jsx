import { Form, useLoaderData } from "react-router-dom";
import { useState } from "react";
import Navegar from "./navegar.element";

export default function Resultado() {
  const parametrosSimulacao = useLoaderData();
  const [prazo, setPrazo] = useState(parametrosSimulacao.prazos[0]);

  const handleChange = (e) => {
    setPrazo(e.target.value);
  };

  return (
    <div className="child flex h-full w-full flex-col items-center">
      <h2 className="text-2xl font-bold text-center mb-4">
        Personalize o seu produto
      </h2>
      <p className="text-center text-xl mb-4">
        Simulado o produto {parametrosSimulacao.produtoId} para um cliente
        nascido em {parametrosSimulacao.dataNascimento} do sexo
        {parametrosSimulacao.sexo == "M" ? " masculino " : " feminino "}
        por {prazo} anos.
      </p>
      <Form method="post" className="flex flex-col h-full w-full">
        <div className="flex space-x-4 mb-4">
          <div className="flex-grow">
            <label htmlFor="prazo" className="label">
              Alterar prazo do produto
            </label>
            <select
              className="input focus:outline-none focus:bg-white"
              id="prazo"
              name="prazo"
              onChange={handleChange}
              value={prazo}
            >
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
          </div>
        </div>
        <div className="flex-grow"></div>
        <Navegar />
      </Form>
    </div>
  );
}
