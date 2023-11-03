import { Form } from "react-router-dom";
import Navegar from "./navegar.element";

export default function Simulacao() {
  return (
    <div>
      <h2 className="text-2xl font-bold text-center mb-4">
        Informações pessoais
      </h2>
      <Form method="post" className="flex flex-col h-full">
        <div className="grid grid-cols-2 flex-grow">
          <div className="px-2">
            <label htmlFor="data-nascimento" className="label">
              Data de Nascimento
            </label>
            <input
              className="input focus:outline-none focus:bg-white"
              type="date"
              id="data-nascimento"
              name="dataNascimento"
              defaultValue="2023-01-01"
            />
          </div>

          <div className="px-2">
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

        <Navegar />
      </Form>
    </div>
  );
}
