import { Form, useLoaderData } from "react-router-dom";
import { useEffect, useState } from "react";
import Navegar from "./navegar.element";
import { pegarSimulacao } from "../produtos";
import { AiTwotoneEdit, AiOutlineCheckCircle } from "react-icons/ai";
import Cleave from "cleave.js/react";
import { FORMATAR_MOEDA } from "../brl_formatter";

function PrazoRendaInput({ prazosRenda, value, onChange }) {
  return (
    <>
      <p className="text-center w-56 text-xl mt-2 mr-2  col-span-2">
        Prazo da renda:
      </p>
      <select
        className="input focus:outline-none focus:bg-white col-span-4"
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
      <p className="text-center w-56 text-xl mt-2 mr-2  col-span-2">Prazo:</p>
      <select
        className="input focus:outline-none focus:bg-white col-span-4"
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

function BeneficioInput({
  value,
  edit,
  onEditSave,
  onChange,
  valido,
  minimo,
  maximo,
}) {
  return (
    <>
      <p className="text-center w-56 text-xl mt-2 mr-2 col-span-2">
        Beneficio:
      </p>
      <div className="grid-rows-2 col-span-3">
        <div className="relative rounded-md shadow-sm">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-2">
            <span className="text-gray-500">R$</span>
          </div>
          <Cleave
            id="beneficio"
            className={`pl-8 ${
              edit ? (valido ? "input" : "input-invalid") : "input-disabled"
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

          <input type="hidden" name="beneficio" value={value} />
        </div>

        <p className={`text-red-500 text-xs ${valido ? "invisible" : ""}`}>
          {`O benefício deve estar entre ${FORMATAR_MOEDA.format(
            minimo
          )} e ${FORMATAR_MOEDA.format(maximo)}`}
        </p>
      </div>
      <button
        className={`ml-2 ${
          valido ? "hover:cursor-pointer" : "cursor-not-allowed"
        }`}
        onClick={onEditSave}
        disabled={!valido}
      >
        {edit ? <AiOutlineCheckCircle /> : <AiTwotoneEdit />}
      </button>
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
  const [beneficioValor, setBeneficioValor] = useState(
    parametrosSimulacao.beneficioMinimo
  );
  const [beneficioValorTemporario, setBeneficioValorTemporario] =
    useState(beneficioValor);
  const [editandoBeneficio, setEditandoBeneficio] = useState(false);
  const [error, setError] = useState(null);

  if (error) {
    throw error;
  }

  useEffect(() => {
    pegarSimulacao(
      parametrosSimulacao.dataNascimento,
      parametrosSimulacao.sexo,
      prazo,
      prazoRenda,
      parametrosSimulacao.produtoId,
      beneficioValor
    )
      .then((simulacao) => {
        setPremio(simulacao.premio);
      })
      .catch((error) => {
        setError(error);
      });
  }, [
    prazo,
    prazoRenda,
    beneficioValor,
    parametrosSimulacao.dataNascimento,
    parametrosSimulacao.sexo,
    parametrosSimulacao.produtoId,
  ]);

  const beneficioValido =
    beneficioValorTemporario <= parametrosSimulacao.beneficioMaximo &&
    beneficioValorTemporario >= parametrosSimulacao.beneficioMinimo;

  const handleEditBeneficio = async (event) => {
    event.preventDefault();
    if (editandoBeneficio) {
      setBeneficioValor(beneficioValorTemporario);
    }
    setEditandoBeneficio(!editandoBeneficio);
  };

  const handleBeneficioChange = (event) => {
    setBeneficioValorTemporario(event.target.rawValue);
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
        Prêmio: {FORMATAR_MOEDA.format(premio)}
      </p>
      <hr className="w-full mb-4" />
      <Form method="post" className="flex flex-col h-full w-full">
        <div className="grid grid-cols-6 w-[100%] max-w-[28rem] min-w-[28rem] self-center justify-items-center">
          <BeneficioInput
            value={beneficioValor}
            onChange={handleBeneficioChange}
            onEditSave={handleEditBeneficio}
            edit={editandoBeneficio}
            valido={beneficioValido}
            minimo={parametrosSimulacao.beneficioMinimo}
            maximo={parametrosSimulacao.beneficioMaximo}
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
        </div>

        <div className="flex-grow"></div>
        <Navegar disabled={editandoBeneficio} />
      </Form>
    </div>
  );
}
