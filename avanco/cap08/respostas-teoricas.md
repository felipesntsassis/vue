# Respostas Teóricas

## Exercício 1

Rotas são os caminhos para as páginas criadas em nosso sistema sendo cada página distinta em sí uma rota assim como cada URL. As rotas devem ser usadas quando um sistema possuir mais de uma tela, assim podemos diferenciá-los.

## Exercício 2

As desvantagens em utilizar hashes nas URLs impossibilita que os buscadores em indexar incorretamente as páginas do sistema, causando problemas no SEO. O problema pode ser fácilmente resolvido no VueJS quando configuramos o plugin ```vue-routes``` em modo *history*.


## Exercício 3

Sub-rotas devem ser utilizadas para mostrar sub tarefas de uma tela, por exemplo. A página de listagem de um objeto é uma rota, porém suas ações como criar, editar, excluir ou visualizar são sub-rotas da rota de listagem. 