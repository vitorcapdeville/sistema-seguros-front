# Sistema seguros

O sistema de seguros é um aplicativo web para gerenciamento de seguros de vida. O front end foi construído utilizando react, react-router e tailwind-css. Ele é composto por um esquema de simulação e contratação em etapas, onde o usuário primeiro escolhe o produto que deseja simular, então preenche algumas informações pessoais genéricas que não o identificam, e recebe já um feedback do preço do seguro, com a possibilidade de ajustar parâmetros associados ao seguro escolhido e obter uma atualização instântanea do preço. Os parâmetros exibidos variam de acordo com o produto escolhido, assim como as opções para esses parâmetros, e os valores são controlados pelo back-end. Após a simulação, o usuário pode prosseguir para a contratação, onde preenche informações pessoais mais específicas, como nome, cpf, etc. e então é redirecionado para uma tela de confirmação onde pode revisar todas as informações inseridas nas etapas anteriores e concluir a contratação.

---

## Como executar

Esse projeto requer uma instalação do Node.js. É possível obter o instalador [aqui](https://nodejs.org/en/download).

Além disso, é necessário instalar as dependências do projeto.
Para isso, execute os seguintes comandos:

```bash
npm install
```

Com as dependências instaladas, é possível executar o projeto:

```bash
npm run dev
```
Para executar o back-end, abra um novo terminal e siga [essas instruções](https://github.com/vitorcapdeville/sistema-seguros-back#como-executar)

Esse projeto foi construído utilizando react, react-router, tailwind-css e vite.js.