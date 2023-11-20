import { Form } from "react-router-dom";
import Navegar from "./navegar.element";
import { InputComLabel } from "./input.element";

export default function InfoPessoal() {
  return (
    <div className="child flex h-full w-full flex-col items-center">
      <h2 className="text-2xl font-bold text-center mb-4">
        Mais algumas informações pessoais
      </h2>
      <Form method="post" className="flex flex-col h-full w-full">
        <div className="w-[100%] max-w-xs self-center">
          <InputComLabel label="CPF" id="cpf" defaultValue="12345678900" />
          <InputComLabel label="Nome" id="nome" defaultValue="Jose da Silva" />
          <InputComLabel
            type="email"
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
