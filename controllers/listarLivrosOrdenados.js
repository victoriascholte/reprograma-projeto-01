const livros = require('../database.js')
const read = require('readline-sync')
const listarLivrosOrdenados = () => {
    const confirmOrdenarLivros = read.question('Deseja visualizar os livros por número de páginas? S/N ').toUpperCase()    
    if (confirmOrdenarLivros === 'S') {
        const livrosOrdenados = livros.sort((a, b) => { 
            return a.paginas - b.paginas;})
            console.table(livrosOrdenados)
    } else {
        console.log ('Ok, fica pra próxima.')
    }
}
module.exports = listarLivrosOrdenados