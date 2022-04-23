const livros = require('./database.js')
const buscarLivros = require('./controllers/buscarLivros')
const listarRecomendados = require('./controllers/listarRecomendados')
const listarLivrosOrdenados = require('./controllers/listarLivrosOrdenados')
const listarLivrosNaoLidos = require('./controllers/listarLivrosNaoLidos')

const read = require('readline-sync')

// readline-sync -> lib p/ pegar imput no terminal

const answer = read.question(`
=================== Menu ===================

Olá! O que você deseja?

1 - CATEGORIA: Buscar livro por categoria
2 - ORDENAR: Ordenar livro por nº de páginas
3 - RECOMENDADOS: Buscar livros recomendados
4 - LISTA DE DESEJOS: Busca livros não lidos

5 - SAIR

Digite um número [1-5]:
`)

// condicionais do Menu
switch (answer) {
  case '1':
    buscarLivros()
    break
  case '2':
    listarLivrosOrdenados()
    break
  case '3':
    listarRecomendados()
    break
  case '4':
    listarLivrosNaoLidos()
    break
  default:
    console.log('Tchau! :)')
    break
}
