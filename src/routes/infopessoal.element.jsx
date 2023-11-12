import { Form } from "react-router-dom";
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

        <div className="flex-grow"></div>

        <Navegar />
      </Form>
    </div>
  );
}
