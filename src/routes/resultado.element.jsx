import { Form, useLoaderData } from "react-router-dom";
import { useEffect, useState } from "react";
import Navegar from "./navegar.element";
import { pegarSimulacao } from "../produtos";
import { AiTwotoneEdit, AiOutlineCheckCircle } from "react-icons/ai";
import Cleave from "cleave.js/react";

const brl_formatter = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
});

function PrazoRendaInput({ prazosRenda, value, onChange }) {
  return (
    <div className="flex mx-auto">
      <p className="text-center w-56 text-xl mt-2 mr-2">Prazo da renda:</p>
      <select
        className="input w-80 focus:outline-none focus:bg-white"
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
    </div>
  );
}

function PrazoInput({ prazos, value, onChange }) {
  return (
    <div className="flex mx-auto items-center">
      <p className="text-center w-56 text-xl mt-2 mr-2">Prazo:</p>
      <select
        className="input w-80 focus:outline-none focus:bg-white"
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
    </div>
  );
}

function BeneficioInput({ value, edit, onEditSave, onChange }) {
  return (
    <div className="flex mx-auto items-center">
      <p className="text-center w-56 text-xl mt-2 mr-2">Beneficio:</p>

      <div className="relative rounded-md shadow-sm w-72">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-2">
          <span className="text-gray-500">R$</span>
        </div>
        <Cleave
          id="beneficio"
          className={`input pl-8 ${
            !edit ? "cursor-not-allowed bg-gray-100" : ""
          }`}
          name="beneficio"
          value={value}
          onChange={onChange}
          disabled={!edit}
          options={{
            numeral: true,
            numeralDecimalMark: ",",
            delimiter: ".",
          }}
        />
      </div>
      {edit ? (
        <button className="ml-3" onClick={onEditSave}>
          {" "}
          <AiOutlineCheckCircle />{" "}
        </button>
      ) : (
        <button className="ml-3" onClick={onEditSave}>
          <AiTwotoneEdit />
        </button>
      )}
    </div>
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
  const [tempValor, setTempValor] = useState(beneficioValor);
  const [editandoBeneficio, setEditandoBeneficio] = useState(false);

  useEffect(() => {
    pegarSimulacao(
      parametrosSimulacao.dataNascimento,
      parametrosSimulacao.sexo,
      prazo,
      prazoRenda,
      parametrosSimulacao.produtoId,
      beneficioValor
    ).then((simulacao) => {
      setPremio(simulacao.premio);
    });
  }, [
    prazo,
    prazoRenda,
    beneficioValor,
    parametrosSimulacao.dataNascimento,
    parametrosSimulacao.sexo,
    parametrosSimulacao.produtoId,
  ]);

  const handleEditBeneficio = async (event) => {
    event.preventDefault();
    if (editandoBeneficio) {
      setBeneficioValor(tempValor);
    } else {
      setTempValor(beneficioValor);
    }
    setEditandoBeneficio(!editandoBeneficio);
  };

  const handleBeneficioChange = (event) => {
    setTempValor(event.target.rawValue);
  };

  const handleChangePrazo = async (e) => {
    setPrazo(e.target.value);
  };

  const handleChangePrazoRenda = async (e) => {
    let prazoRendaObj = JSON.parse(e.target.value);
    setPrazoRenda(prazoRendaObj);
  };

  return (
    <div className="child flex h-full w-full flex-col items-center">
      <h2 className="text-2xl font-bold text-center mb-4">
        Personalize o seu produto
      </h2>
      <p className="text-center text-xl mb-4">
        Prêmio: {brl_formatter.format(premio)}
      </p>
      <hr className="w-full mb-4" />
      <Form method="post" className="flex flex-col h-full w-full">
        <BeneficioInput
          value={beneficioValor}
          onChange={handleBeneficioChange}
          onEditSave={handleEditBeneficio}
          edit={editandoBeneficio}
        />
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
        <div className="flex-grow"></div>
        <Navegar />
      </Form>
    </div>
  );
}
