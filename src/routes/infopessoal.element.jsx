import { Form } from "react-router-dom";
import Voltar from "./voltar.element";

export default function InfoPessoal() {
  return (
    <div className="content-simulacao">
      <Form method="post">
        <label htmlFor="cpf">CPF:</label>
        <input type="text" id="cpf" name="cpf" required />

        <button type="submit" className="botao-simular">
          Contratar
        </button>
        <Voltar />
      </Form>
    </div>
  );
}
