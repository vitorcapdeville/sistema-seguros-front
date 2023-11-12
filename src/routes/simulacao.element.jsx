import { Form } from "react-router-dom";
import Navegar from "./navegar.element";
import { InputComLabel, SelectComLabel } from "./input.element";

export default function Simulacao() {
  return (
    <div className="child flex h-full w-full flex-col items-center">
      <h2 className="text-2xl font-bold text-center mb-4">
        Informações pessoais
      </h2>
      <Form method="post" className="flex flex-col h-full w-full">
        <div className="w-[50%] self-center">
          <InputComLabel
            label="Data de nascimento"
            id="dataNascimento"
            type="date"
            defaultValue="1996-12-03"
          />
          <SelectComLabel
            label="Sexo"
            id="sexo"
            choices={[
              { label: "Masculino", value: "M" },
              { label: "Feminino", value: "F" },
            ]}
          />
        </div>
        <div className="flex-grow"></div>
        <Navegar />
      </Form>
    </div>
  );
}
