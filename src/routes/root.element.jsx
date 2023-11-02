import { Outlet, useLocation } from "react-router-dom";

function Passo({ numero, descricao, passoAtual, ultimo }) {
  const liClassMeio = `flex md:w-full items-center ${
    passoAtual > numero ? "text-blue-600 dark:text-blue-500 sm:" : ""
  } after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700`;
  const iconePasso =
    passoAtual > numero ? (
      <svg
        className="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-2.5"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
      </svg>
    ) : (
      <span className="mr-2">{numero}</span>
    );

  if (ultimo) {
    return (
      <li
        className={`flex items-center ${
          passoAtual > numero ? "text-blue-600 dark:text-blue-500" : ""
        }`}
      >
        {iconePasso}
        {descricao}
      </li>
    );
  }
  return (
    <li className={liClassMeio}>
      <span className="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500">
        {iconePasso}
        {descricao}
      </span>
    </li>
  );
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
  console.log(passoAtual);

  return (
    <>
      <ol className="flex items-center w-full text-sm font-medium text-center text-gray-500 dark:text-gray-400 sm:text-base">
        <Passo
          numero={1}
          descricao="Produto"
          passoAtual={passoAtual}
          ultimo={false}
        />
        <Passo
          numero={2}
          descricao="Você"
          passoAtual={passoAtual}
          ultimo={false}
        />
        <Passo
          numero={3}
          descricao="Prévia"
          passoAtual={passoAtual}
          ultimo={false}
        />
        <Passo
          numero={4}
          descricao="Confirmação"
          passoAtual={passoAtual}
          ultimo={true}
        />
      </ol>
      <Outlet />
    </>
  );
}
