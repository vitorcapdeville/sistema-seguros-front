import { Form } from "react-router-dom";
import Navegar from "./navegar.element";

export default function InfoPessoal() {
  return (
    <div className="child flex h-full w-full flex-col items-center">
      <h2 className="text-2xl font-bold text-center mb-4">
        Mais algumas informações pessoais
      </h2>
      <Form method="post" className="flex flex-col h-full w-full">
        <div className="flex space-x-4 mb-4">
          <div className="flex-grow">
            <label htmlFor="cpf" className="label">
              CPF:
            </label>
            <input
              type="text"
              id="cpf"
              name="cpf"
              defaultValue="12345678900"
              required
              className="input focus:outline-none focus:bg-white"
            />
          </div>
        </div>
        <div className="flex-grow"></div>

        <Navegar />
      </Form>
    </div>
  );
}
