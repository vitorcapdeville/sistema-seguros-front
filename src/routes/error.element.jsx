import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    // <div className="flex flex-col items-center justify-center w-[100%]">
    //   <h1 className="font-bold text-2xl">Oops!</h1>
    //   <p className="text-lg">Sorry, an unexpected error has occurred.</p>
    //   <p className="text-sm">
    //     <i>{error.statusText || error.message}</i>
    //   </p>
    // </div>
    <div className="flex min-h-screen w-[100%] flex-col items-center justify-center">
      <h1 className="mb-12 text-4xl font-bold">Oops!</h1>
      <p className="text-lg mb-6">Um erro inesperado aconteceu.</p>
      <p className="text-sm">
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
