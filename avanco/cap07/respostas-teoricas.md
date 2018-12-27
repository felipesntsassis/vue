# Respostas Teóricas

## Exercício 1

Reutilizar o componente nos dá a capacidade em manter nosso código mais limpo, facilitar a manutenção, além de deixar um rastro de padrões onde qualquer desenvolvedor pode entender e continuar o desenvolvimento do projeto.

## Exercício 2

Utilizaria *slots*, pois o conteúdo recebido provavelmente será grande por se tratar de código HTML, sendo que o uso de *slots* permite alocar um espaço para receber qualquer tipo de conteúdo HTML.

## Exercício 3

Utilizaria *emit*, pois o componente ```Resultado``` ouvirá a alteração do outro, logo existe uma comunicação entre os componentes, que no VueJs fica por responsabilidade do método *$emit*.

## Exercício 4
Utilizaria *props*, pois o nome e o título são variáveis comuns que podem ou não originar do banco de dados, logo não é um código mas sim uma string então devemos tratá-las como propredades do nosso componente.

## Exercício 5

*Mixins* pois são uma das opções de reaproveitar partes de componentes em outros, assim podemos extender filtros, dados, etc do componente ```Pessoa``` para nosso gerente.