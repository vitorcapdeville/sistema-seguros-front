import { Form, useLoaderData } from "react-router-dom";
import { useState } from "react";
import Navegar from "./navegar.element";
import { pegarSimulacao } from "../produtos";

const brl_formatter = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
});

export default function Resultado() {
  const parametrosSimulacao = useLoaderData();
  const [prazo, setPrazo] = useState(parametrosSimulacao.prazos[0]);
  const [prazoRenda, setPrazoRenda] = useState(
    parametrosSimulacao.prazosRenda[0]
  );
  const [premio, setPremio] = useState(parametrosSimulacao.premio);

  const handleChangePrazo = async (e) => {
    setPrazo(e.target.value);
    let simulacao = await pegarSimulacao(
      parametrosSimulacao.formula,
      parametrosSimulacao.dataNascimento,
      parametrosSimulacao.sexo,
      e.target.value,
      prazoRenda,
      parametrosSimulacao.produtoId
    );
    setPremio(simulacao.premio);
  };

  const handleChangePrazoRenda = async (e) => {
    let prazoRendaObj = JSON.parse(e.target.value);
    setPrazoRenda(prazoRendaObj);
    let simulacao = await pegarSimulacao(
      parametrosSimulacao.formula,
      parametrosSimulacao.dataNascimento,
      parametrosSimulacao.sexo,
      prazo,
      prazoRendaObj,
      parametrosSimulacao.produtoId
    );
    setPremio(simulacao.premio);
  };

  return (
    <div className="child flex h-full w-full flex-col items-center">
      <h2 className="text-2xl font-bold text-center mb-4">
        Personalize o seu produto
      </h2>
      <p className="text-center text-xl mb-4">
        Prêmio: {brl_formatter.format(premio)}.
      </p>
      <Form method="post" className="flex flex-col h-full w-full">
        <div className="flex space-x-4 mb-4">
          <div className="flex-grow">
            {parametrosSimulacao.prazos.length ? (
              <>
                <label htmlFor="prazo" className="label">
                  Alterar prazo do produto
                </label>
                <select
                  className="input focus:outline-none focus:bg-white"
                  id="prazo"
                  name="prazo"
                  onChange={handleChangePrazo}
                  value={prazo}
                >
                  {parametrosSimulacao.prazos.map((prazo) => (
                    <option key={prazo} value={prazo}>
                      {prazo} anos
                    </option>
                  ))}
                </select>
              </>
            ) : null}
            {parametrosSimulacao.prazosRenda.length ? (
              <>
                <label htmlFor="prazoRenda" className="label">
                  Alterar prazo da renda
                </label>
                <select
                  className="input focus:outline-none focus:bg-white"
                  id="prazoRenda"
                  name="prazoRenda"
                  onChange={handleChangePrazoRenda}
                  value={JSON.stringify(prazoRenda)}
                >
                  {parametrosSimulacao.prazosRenda.map((prazoRenda) => (
                    <option
                      key={
                        prazoRenda.prazo_renda + prazoRenda.prazo_certo_renda
                      }
                      value={JSON.stringify(prazoRenda)}
                    >
                      {prazoRenda.prazo_renda} anos com{" "}
                      {prazoRenda.prazo_certo_renda} anos de prazo certo
                    </option>
                  ))}
                </select>
              </>
            ) : null}
          </div>
        </div>
        <div className="flex-grow"></div>
        <Navegar />
      </Form>
    </div>
  );
}
