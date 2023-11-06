import { useNavigate } from "react-router-dom";
import { GrLinkNext, GrLinkPrevious } from "react-icons/gr";

export function Voltar({ disabled = false }) {
  let navigate = useNavigate();
  return (
    <>
      <button
        type="button"
        disabled={disabled}
        className={disabled ? "cursor-not-allowed" : ""}
        onClick={() => {
          navigate(-1);
        }}
      >
        <GrLinkPrevious size={32} />
      </button>
    </>
  );
}

export function Avancar({ disabled = false }) {
  return (
    <button
      type="submit"
      disabled={disabled}
      className={disabled ? "cursor-not-allowed" : ""}
    >
      <GrLinkNext size={32} />
    </button>
  );
}

export default function Navegar({ disabled = false }) {
  return (
    <div className="flex justify-between px-2 mt-4">
      <Voltar disabled={disabled} />
      <Avancar disabled={disabled} />
    </div>
  );
}
