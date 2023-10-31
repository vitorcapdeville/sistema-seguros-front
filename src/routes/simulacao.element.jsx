import { Form, useNavigate, useParams } from "react-router-dom";

export default function Simulacao() {
  const navigate = useNavigate();
  const params = useParams();
  const action = `/simular/${params.produtoId}/resultado`;
  return (
    <div className="content-simulacao">
      <h2>Simulação de Seguro</h2>
      <Form method="post" action={action}>
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
            <option value="masculino">Masculino</option>
            <option value="feminino">Feminino</option>
          </select>
        </div>

        <button type="submit" id="simular" className="botao-simular">
          Simular
        </button>
        <button
          type="button"
          className="botao-simular"
          onClick={() => {
            navigate(-1);
          }}
        >
          Voltar
        </button>
      </Form>
    </div>
  );
}
