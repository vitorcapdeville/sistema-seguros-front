import { Form } from "react-router-dom";
import Voltar from "./voltar.element";

export default function Simulacao() {
  return (
    <div className="content-simulacao">
      <h2>Simulação de Seguro</h2>
      <Form method="post">
        <div className="form-group">
          <label htmlFor="data-nascimento">Data de Nascimento</label>
          <input
            type="date"
            id="data-nascimento"
            name="dataNascimento"
            defaultValue="2023-01-01"
          />
        </div>

        <div className="form-group">
          <label htmlFor="sexo">Sexo</label>
          <select id="sexo" name="sexo">
            <option value="M">Masculino</option>
            <option value="F">Feminino</option>
          </select>
        </div>

        <button type="submit" id="simular" className="botao-simular">
          Simular
        </button>
        <Voltar />
      </Form>
    </div>
  );
}
