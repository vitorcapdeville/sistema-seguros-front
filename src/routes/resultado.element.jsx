import { Form, useLoaderData } from "react-router-dom";
import { useState } from "react";
import Navegar from "./navegar.element";
import { pegarSimulacao } from "../produtos";
import Cleave from "cleave.js/react";

const brl_formatter = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
});

function PrazoRendaInput({ prazosRenda, value, onChange }) {
  return (
    <>
      <label htmlFor="prazoRenda" className="label">
        Alterar prazo da renda
      </label>
      <select
        className="input focus:outline-none focus:bg-white"
        id="prazoRenda"
        name="prazoRenda"
        onChange={onChange}
        value={JSON.stringify(value)}
      >
        {prazosRenda.map((prazoRenda) => (
          <option
            key={prazoRenda.prazo + prazoRenda.prazo_certo}
            value={JSON.stringify(prazoRenda)}
          >
            {prazoRenda.prazo} anos com {prazoRenda.prazo_certo} anos de prazo
            certo
          </option>
        ))}
      </select>
    </>
  );
}

function PrazoInput({ prazos, value, onChange }) {
  return (
    <>
      <label htmlFor="prazo" className="label">
        Alterar prazo do produto
      </label>
      <select
        className="input focus:outline-none focus:bg-white"
        id="prazo"
        name="prazo"
        onChange={onChange}
        value={value}
      >
        {prazos.map((prazo) => (
          <option key={prazo} value={prazo}>
            {prazo} anos
          </option>
        ))}
      </select>
    </>
  );
}

function BeneficioInput({ value, onChange }) {
  return (
    <>
      <label htmlFor="beneficio" className="label">
        Alterar benefício
      </label>
      <div className="relative mt-2 rounded-md shadow-sm">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          <span className="text-gray-500 sm:text-sm">R$</span>
        </div>
        <Cleave
          id="beneficio"
          className="input pl-9"
          name="beneficio"
          value={value}
          onChange={onChange}
          options={{
            numeral: true,
            numeralDecimalMark: ",",
            delimiter: ".",
          }}
        />
      </div>
    </>
  );
}

export default function Resultado() {
  const parametrosSimulacao = useLoaderData();
  const [prazo, setPrazo] = useState(parametrosSimulacao.prazos[0]);
  const [prazoRenda, setPrazoRenda] = useState(
    parametrosSimulacao.prazosRenda[0]
  );
  const [premio, setPremio] = useState(parametrosSimulacao.premio);
  const [beneficioValor, setBeneficioValor] = useState(5000);

  const handleChangeBeneficio = async (event) => {
    setBeneficioValor(event.target.rawValue);
    let simulacao = await pegarSimulacao(
      parametrosSimulacao.dataNascimento,
      parametrosSimulacao.sexo,
      prazo,
      prazoRenda,
      parametrosSimulacao.produtoId,
      event.target.rawValue
    );
    setPremio(simulacao.premio);
  };

  const handleChangePrazo = async (e) => {
    setPrazo(e.target.value);
    let simulacao = await pegarSimulacao(
      parametrosSimulacao.dataNascimento,
      parametrosSimulacao.sexo,
      e.target.value,
      prazoRenda,
      parametrosSimulacao.produtoId,
      beneficioValor
    );
    setPremio(simulacao.premio);
  };

  const handleChangePrazoRenda = async (e) => {
    let prazoRendaObj = JSON.parse(e.target.value);
    setPrazoRenda(prazoRendaObj);
    let simulacao = await pegarSimulacao(
      parametrosSimulacao.dataNascimento,
      parametrosSimulacao.sexo,
      prazo,
      prazoRendaObj,
      parametrosSimulacao.produtoId,
      beneficioValor
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
      <p className="text-center text-xl mb-4">
        Beneficio: {brl_formatter.format(beneficioValor)}
      </p>
      <Form method="post" className="flex flex-col h-full w-full">
        <div className="flex space-x-4 mb-4">
          <div className="flex-grow">
            <BeneficioInput
              value={beneficioValor}
              onChange={handleChangeBeneficio}
            />
          </div>
          <div className="flex-grow">
            {parametrosSimulacao.prazos.length ? (
              <PrazoInput
                prazos={parametrosSimulacao.prazos}
                value={prazo}
                onChange={handleChangePrazo}
              />
            ) : null}
            {parametrosSimulacao.prazosRenda.length ? (
              <PrazoRendaInput
                prazosRenda={parametrosSimulacao.prazosRenda}
                value={prazoRenda}
                onChange={handleChangePrazoRenda}
              />
            ) : null}
          </div>
        </div>
        <div className="flex-grow"></div>
        <Navegar />
      </Form>
    </div>
  );
}
