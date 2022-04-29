# 🚀 `SI`stema de gerenciamento de livros

**PROJETO GUIADO #1**

## 🧠 Contexto

O objetivo é criar um sistema onde deverá ser possível gerenciar informações sobre os livros que já lemos e os livros que estão na nossa listinha de desejos.



> 

### `Passo a passo do projeto`

| Passo                                 | Comando/informação       |
| ------------------------------------- | ------------------------ |
| Iniciar projeto                       | `npm init -y`            |
| No package.json, criar o script start | `"start": "node app.js"` |
| Instalar dependências                 | `npm i readline-sync`    |
| Crie o .gitignore                     | `node_modules`           |

###`Tecnologias`

| Ferramenta      | Descrição                                   |
| --------------- | ------------------------------------------- |
| `javascript`    | Linguagem de programação                    |
| `nodejs`        | Ambiente de execução do javascript          |
| `npm`           | Gerenciador de pacotes                      |
| `readline-sync` | Dependência para receber inputs no terminal |

`Arquitetura`

```
 📁 projeto-de-livros
   |- 📁 controllers
   |     |- 📄 buscarLivros.js
   |     |- 📄 listarRecomendados.js
   |     |- 📄 listarLivrosNaoLidos.js
   |     |- 📄 listarLivrosOrdenados.js
   |- 📁 node_modules
   |- 📄 app.js
   |- 📄 database.js
   |- 📄 .gitignore
   |- 📄 package.json  
   |- 📄 package-lock.json
```

### `Requisitos`

- [ ]   **`buscarLivros`** Deverá ser possível buscar livros pela categoria
- [ ]   **`listarLivrosOrdenados`** Deverá retornar todos os livros ordenados de forma crescente por quantidade de páginas.
- [ ]   **`listarRecomendados`** Deverá listar livros que já foram lidos e que são recomendados
- [ ]   **`listarLivrosNaoLidos`** Deverá listar livros que ainda não foram lidos

`REGRAS`

```
- Inicia o algoritmo escolhendo a forma de busca no menu.
- Caso a pessoa usuária escolha alguma opção inexistente deverá mostrar no console a string 'fim do algoritmo'.
- O comportamento esperado deve ser o pedido da entrada e a impressão das tabelas buscadas no console, conforme requisitos acima.
```

## `Dados`

Criar dados mocados, um array de objetos de livros com a modelagem abaixo.

LIVRO

- nome: string
- categoria: string
- paginas: number
- recomenda: boolean
- leu: boolean
