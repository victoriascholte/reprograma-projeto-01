const livros = require('../database.js')
const read = require('readline-sync')
const listarLivrosNaoLidos = () => {
    const confirmNaoLidos = read.question('Deseja visualizar os livros não lidos? S/N').toUpperCase()
    if (confirmNaoLidos === 'S') {
        const livrosNaoLidos = livros.filter (livro => livro.leu === false)
        console.table(livrosNaoLidos)
    } else {
        console.log ('Ok, fica pra próxima.')
    }
}
module.exports = listarLivrosNaoLidos
