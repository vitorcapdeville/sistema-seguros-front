import { useNavigate } from "react-router-dom";
import { GrLinkNext, GrLinkPrevious } from "react-icons/gr";

function Voltar() {
  let navigate = useNavigate();
  return (
    <>
      <button
        type="button"
        onClick={() => {
          navigate(-1);
        }}
      >
        <GrLinkPrevious size={32} />
      </button>
    </>
  );
}

function Avancar() {
  return (
    <button type="submit">
      <GrLinkNext size={32} />
    </button>
  );
}

export default function Navegar() {
  return (
    <div className="flex justify-between px-2 mt-4">
      <Voltar />
      <Avancar />
    </div>
  );
}
