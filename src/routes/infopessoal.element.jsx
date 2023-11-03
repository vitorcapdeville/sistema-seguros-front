import { Form } from "react-router-dom";
import Navegar from "./navegar.element";

export default function InfoPessoal() {
  return (
    <>
      <h2 className="text-2xl font-bold text-center mb-4">
        Mais algumas informações pessoais
      </h2>
      <div>
        <Form method="post">
          <label htmlFor="cpf" className="label">
            CPF:
          </label>
          <input
            type="text"
            id="cpf"
            name="cpf"
            required
            className="input focus:outline-none focus:bg-white"
          />

          <Navegar />
        </Form>
      </div>
    </>
  );
}
