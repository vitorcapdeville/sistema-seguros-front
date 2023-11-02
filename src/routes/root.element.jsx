import { Outlet, useLocation } from "react-router-dom";

function Passo({ passoAtual, numero }) {
  if (numero <= passoAtual) {
    return <span className="w-12 h-2 rounded-sm dark:bg-green-400"></span>;
  }
  return <span className="w-12 h-2 rounded-sm dark:bg-gray-600"></span>;
}

export default function Root() {
  const location = useLocation();

  const pegarPassoAtual = (pathname) => {
    if (pathname.includes("sucesso")) {
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
  const passoAtual = pegarPassoAtual(location.pathname);

  // indicador de passo atual e restantes baseado em https://mambaui.com/components/steps
  return (
    <>
      <div className="p-4 space-y-2">
        <div className="flex max-w-xs space-x-3">
          <Passo passoAtual={passoAtual} numero={1} />
          <Passo passoAtual={passoAtual} numero={2} />
          <Passo passoAtual={passoAtual} numero={3} />
          <Passo passoAtual={passoAtual} numero={4} />
          <Passo passoAtual={passoAtual} numero={5} />
        </div>
      </div>
      <Outlet />
    </>
  );
}
