## TODO

Eu estou usando 3 rotas get para pegar prazo, prazoRenda e formula. Eu sempre uso as 3 juntas.
Faria mais sentido criar uma rota "pegarParametrosProduto" e trazer as 3 informações juntas?

Com relação as fórmulas:
eu tenho diferentes fórmulas de calculo para diferentes produtos.
Eu criei rotas específicas na API, e uma função genérica no javascript, que recebe o nome da formula
e decide qual rota chamar.

Seria mais adequado criar uma rota genérica direto na API e chamar essa rota genérica com todos os parametros possíveis?
Acho que não pq a documentação ficaria menos clara, e eu ainda teria que verificar quais inputs mostrar ou nao no front-end.

Mas ficaria confusa para o usuário externo. Se a rota sempre é chamada com as infos do banco de dados, o banco
de dados vai definir quais parametros estarao disponiveis para cada tipo de produto. Por ex, se um produto nao é de renda,
entao quando tentarmos trazer o prazo de renda vai vir como null, e isso pode ser passado se eu usar a rota genérica.
