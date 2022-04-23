const livros = require('../database.js')
const read = require('readline-sync')
const buscarLivros = () => {
    const opcaoInicial = read.question('Deseja buscar por categoria? S/N ').toUpperCase()
    if (opcaoInicial === 'S') {
       const categorias = livros.map(livro => livro.categoria)
       console.log(categorias)
       const inputCategoria =read.question('Digite uma categoria, conforme tabela acima. ')
       const confirmCategoria = read.question('Confirma? S/N').toUpperCase()
       if (confirmCategoria === 'S'){
           const livrosFiltrados = livros.filter(livro => livro.categoria === inputCategoria)
           console.table(livrosFiltrados)
       }
    } else {
        console.log ('Ok, fica pra próxima.')
    }
}
module.exports = buscarLivros

