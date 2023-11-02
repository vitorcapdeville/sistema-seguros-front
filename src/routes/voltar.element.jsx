import { useNavigate } from "react-router-dom";

export default function Voltar() {
  let navigate = useNavigate();
  return (
    <>
      <button
        type="button"
        className="botao-simular"
        onClick={() => {
          navigate(-1);
        }}
      >
        Voltar
      </button>
    </>
  );
}
