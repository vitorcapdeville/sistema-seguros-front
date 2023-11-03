import { Form } from "react-router-dom";
import Navegar from "./navegar.element";

export default function Simulacao() {
  return (
    <div className="child flex h-full w-full flex-col items-center">
      <h2 className="text-2xl font-bold text-center mb-4">
        Informações pessoais
      </h2>
      <Form method="post" className="flex flex-col h-full w-full">
        <div className="flex space-x-4 mb-4">
          <div className="flex-grow">
            <label htmlFor="data-nascimento" className="label">
              Data de Nascimento
            </label>
            <input
              className="input focus:outline-none focus:bg-white"
              type="date"
              id="data-nascimento"
              name="dataNascimento"
              required
            />
          </div>

          <div className="flex-grow">
            <label htmlFor="sexo" className="label">
              Sexo
            </label>
            <select
              id="sexo"
              name="sexo"
              className="input focus:outline-none focus:bg-white"
            >
              <option value="M">Masculino</option>
              <option value="F">Feminino</option>
            </select>
          </div>
        </div>
        <div className="flex-grow"></div>
        <Navegar />
      </Form>
    </div>
  );
}
