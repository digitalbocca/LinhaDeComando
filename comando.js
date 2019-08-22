'use strict'

// VAMOS USAR READLINE PARA LER O VALOR DIGITADO
const readline = require('readline')

// DEPENDÊNCIA TABLE SERVE APENAS PARA A FORMATAÇÃO DO TEXTO
const Table = require('cli-table')

// DEPENDÊNCIA CHALK SERVE PARA COLORIR OS TEXTOS DO CONSOLE
const chalk = require('chalk')

// CRIANDO A INTERFACE DE READLINE
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

process.env.EDB_ENV === 'dev' ? console.log('Ambiente de Desenvolvimento') : console.log('Ambiente de Produção')

// COMANDO inicio
let inicio = () => {
  /**
   * CASO NÃO QUEIRA USAR AS DEPENDÊNCIAS PARA A FORMATAÇÃO
   * DO TEXTO. UTILIZE AS LINHAS COMENTADAS ABAIXO NO LUGAR
   * DA CRIAÇÃO DE TABLE.
   */

  /*

  let iniciandoProgramaTable = `
  +------------------------+
  |   INICIANDO PROGRAMA   |
  +------------------------+
  \n`

  console.log(chalk.green(iniciandoProgramaTable))

  */

  // CRIAÇÃO E FORMATAÇÃO DA TABELA QUE SERÁ EXIBIDA
  // CONSULTE A DOCUMENTAÇÃO DO cli-table NO SITE DO NPM
  let table = new Table({
    head: ['          INICIANDO PROGRAMA'],
    colWidths: [40],
    style: {
      head: ['black', 'bold']
    }
  })

  // EXIBE A TABELA
  console.log(table.toString())
}

// COMANDO copy
let copy = () => {
  /**
   * CASO NÃO QUEIRA USAR AS DEPENDÊNCIAS PARA A FORMATAÇÃO
   * DO TEXTO. UTILIZE AS LINHAS COMENTADAS ABAIXO NO LUGAR
   * DA CRIAÇÃO DE TABLE.
   */

  /*

  let copyTable = `
  +-----------------------------------+
  |  (c)2018 - Estúdio Digital Bocca  |
  +-----------------------------------+
  \n`
  console.log(chalk.green(copyTable))

  */

  // CRIAÇÃO E FORMATAÇÃO DA TABELA QUE SERÁ EXIBIDA
  // CONSULTE A DOCUMENTAÇÃO DO cli-table NO SITE DO NPM
  let table = new Table({
    head: ['   (c)2018 - Estúdio Digital Bocca'],
    colWidths: [40],
    style: {
      head: ['green', 'bold'],
      border: ['green']
    }
  })

  // EXIBE A TABELA
  console.log(table.toString())
}

// ENCERRA A EXECUÇÃO
let encerrar = () => {
  rl.close()
}

let listaDeComandos = () => {
  let errorTable = `
  ${chalk.red('Comando Inexistente !!!')}
  \n
  +------------------------+
  |    LISTA DE COMANDOS   |
  +------------------------+
  | inicio                 |
  | copy                   |
  | sair                   |
  +------------------------+
  \n
  `
  console.log(errorTable)
}

// FUNÇÃO QUE FICA AGUARDANDO O COMANDO
let comandoPrompt = () => {
  rl.question('COMANDO: ', comando => {
    console.log(`Executando o Comando: ${chalk.green(comando)} \n`)
    if (comando === 'inicio') {
      inicio()
      comandoPrompt()
    } else if (comando === 'copy') {
      copy()
      comandoPrompt()
    } else if (comando === 'sair') {
      encerrar()
    } else {
      listaDeComandos()
      comandoPrompt()
    }
  })
}

// INICIA O PROGRAMA.
comandoPrompt()
