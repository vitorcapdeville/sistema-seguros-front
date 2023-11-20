import { Outlet, useLocation } from "react-router-dom";

function Passo({ passoAtual, numero, falha = false }) {
  const cor = falha ? "bg-red-400" : "bg-green-400";
  if (numero <= passoAtual) {
    return <span className={`w-12 h-2 rounded-sm ${cor}`}></span>;
  }
  return <span className="w-12 h-2 rounded-sm bg-gray-600"></span>;
}

const pegarPassoAtual = (pathname) => {
  if (pathname.includes("sucesso") || pathname.includes("falha")) {
    return 6;
  } else if (pathname.includes("confirmar")) {
    return 5;
  } else if (pathname.includes("contratar")) {
    return 4;
  } else if (pathname.includes("resultado")) {
    return 3;
  } else if (pathname.includes("simular")) {
    return 2;
  }
  return 1;
};

export default function Root() {
  const location = useLocation();

  const passoAtual = pegarPassoAtual(location.pathname);
  const falha = location.pathname.includes("falha");

  // indicador de passo atual e restantes baseado em https://mambaui.com/components/steps
  return (
    <div className="overflow-auto min-w-[700px]">
      <div className="flex flex-col pt-8 pb-8 h-[100vh] items-center justify-center bg-gray-50">
        <div className="rounded-lg bg-white px-10 pb-8 pt-10 shadow-xl ring-1 ring-gray-900/5 max-w-[1000px] w-[90vw] flex flex-col flex-grow">
          <div className="mx-auto flex items-center justify-center p-4">
            <div className="flex max-w-xs space-x-3">
              <Passo passoAtual={passoAtual} numero={1} />
              <Passo passoAtual={passoAtual} numero={2} />
              <Passo passoAtual={passoAtual} numero={3} />
              <Passo passoAtual={passoAtual} numero={4} />
              <Passo passoAtual={passoAtual} numero={5} />
              <Passo passoAtual={passoAtual} numero={6} falha={falha} />
            </div>
          </div>

          <div className="parent bg-white flex-grow">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}
