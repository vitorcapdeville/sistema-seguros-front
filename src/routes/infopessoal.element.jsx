import { Form, useLoaderData } from "react-router-dom";
import Navegar from "./navegar.element";

function InputComLabel({ label, id, defaultValue }) {
  return (
    <div>
      <label htmlFor="cpf" className="label">
        {label}:
      </label>
      <input
        type="text"
        id={id}
        name={id}
        defaultValue={defaultValue}
        required
        className="input focus:outline-none focus:bg-white"
      />
    </div>
  );
}

export default function InfoPessoal() {
  const parametros = useLoaderData();
  return (
    <div className="child flex h-full w-full flex-col items-center">
      <h2 className="text-2xl font-bold text-center mb-4">
        Mais algumas informações pessoais
      </h2>
      <Form method="post" className="flex flex-col h-full w-full">
        <div className="grid grid-cols-3 gap-x-4 gap-y-2">
          <InputComLabel label="CPF" id="cpf" defaultValue="12345678900" />
          <InputComLabel label="Nome" id="nome" defaultValue="Jose da Silva" />
          <InputComLabel
            label="E-mail"
            id="email"
            defaultValue="jsilva@email.com"
          />
        </div>
        <h2 className="text-2xl font-bold text-center mb-4 mt-4">
          Produto escolhido
        </h2>
        <ul>
          <li>Produto: {parametros.produto}</li>
          <li>Data Nascimento: {parametros.dataNascimento}</li>
          <li>Sexo: {parametros.sexo}</li>
          <li>Prazo: {parametros.prazo}</li>
          {parametros.prazoRenda != "null" ? (
            <>
              <li>Prazo da renda: {parametros.prazoRenda}</li>
              <li>Prazo certo da renda: {parametros.prazoCertoRenda}</li>
            </>
          ) : null}
          <li>Benefício: {parametros.beneficio}</li>
          <li>Prêmio: {parametros.premio}</li>
        </ul>

        <div className="flex-grow"></div>

        <Navegar />
      </Form>
    </div>
  );
}
