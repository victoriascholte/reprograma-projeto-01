const livros = require('../database.js')
const read = require('readline-sync')
const listarRecomendados = () => {
    const confirmRecomendados = read.question('Deseja visualizar os livros recomendados? S/N').toUpperCase()
    if (confirmRecomendados === 'S') {
            const livrosRecomendados = livros.filter (livro => livro.recomenda === true)
            console.table(livrosRecomendados)        
    } else {
        console.log ('Ok, fica pra próxima.')
    }
} 
module.exports = listarRecomendados
