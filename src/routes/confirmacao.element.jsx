import { Form, useLoaderData } from "react-router-dom";
import { FORMATAR_MOEDA } from "../brl_formatter";
import { Voltar } from "./navegar.element";

const formatarData = (data) => {
  const [ano, mes, dia] = data.split("-");
  return `${dia}/${mes}/${ano}`;
};

export default function Confirmacao() {
  const parametros = useLoaderData();

  return (
    <div className="child flex h-full w-full flex-col items-center">
      <h2 className="text-2xl font-bold text-center mb-4">
        Confirme as opções escolhidas
      </h2>
      <hr className="w-full"></hr>
      <table className="w-[50%] self-center mt-4 mb-4">
        <tbody>
          <tr>
            <td></td>
            <td>CPF</td>
            <td>{parametros.cpf}</td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td>Nome</td>
            <td>{parametros.nome}</td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td>Email</td>
            <td>{parametros.email}</td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td>Data nascimento</td>
            <td>{formatarData(parametros.dataNascimento)}</td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td>Sexo</td>
            <td>{parametros.sexo == "M" ? "Masculino" : "Feminino"}</td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td>Produto</td>
            <td>{parametros.produto}</td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td>Prazo</td>
            <td>{parametros.prazo} anos</td>
            <td></td>
          </tr>
          {parametros.prazoRenda != "null" ? (
            <>
              <tr>
                <td></td>
                <td>Prazo da renda</td>
                <td>{parametros.prazoRenda} anos</td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td>Prazo certo da renda</td>
                <td>{parametros.prazoCertoRenda} anos</td>
                <td></td>
              </tr>
            </>
          ) : null}
          <tr>
            <td></td>
            <td>Benefício</td>
            <td>{FORMATAR_MOEDA.format(parametros.beneficio)}</td>
            <td></td>
          </tr>
        </tbody>
      </table>
      <hr className="w-full"></hr>
      <p className="mt-2 text-2xl text-center">
        Prêmio: {FORMATAR_MOEDA.format(parametros.premio)}
      </p>
      <Form method="post" className="flex flex-col h-full w-full">
        <div className="flex-grow"></div>
        <div className="flex justify-between px-2 mt-4">
          <Voltar disabled={false} />
          <button
            type="submit"
            className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
          >
            Contratar!
          </button>
        </div>
      </Form>
    </div>
  );
}
