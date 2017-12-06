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
  console.log('\n')
  console.log('+------------------------+')
  console.log('|   INICIANDO PROGRAMA   |')
  console.log('+------------------------+')
  console.log('\n')
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
  console.log('\n')
  console.log('(c)2017 - Estúdio Digital Bocca'.green)
  console.log('\n')
  */

  // CRIAÇÃO E FORMATAÇÃO DA TABELA QUE SERÁ EXIBIDA
  // CONSULTE A DOCUMENTAÇÃO DO cli-table NO SITE DO NPM
  let table = new Table({
    head: ['   (c)2017 - Estúdio Digital Bocca'],
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
  console.log(chalk.red('Comando Inexistente!!!'))
  console.log('\n')
  console.log('+------------------------+')
  console.log('|    LISTA DE COMANDOS   |')
  console.log('+------------------------+')
  console.log('| inicio                 |')
  console.log('| copy                   |')
  console.log('| sair                   |')
  console.log('+------------------------+')
  console.log('\n')
}

// FUNÇÃO QUE FICA AGUARDANDO O COMANDO
let comandoPrompt = () => {
  rl.question('COMANDO: ', comando => {
    console.log(`Executando o Comando: ${comando} \n`)
    comando === 'inicio' ? (inicio(), comandoPrompt()) :
    comando === 'copy' ? (copy(), comandoPrompt()) :
    comando === 'sair' ? encerrar() : (listaDeComandos(), comandoPrompt())
  })
}

// INICIA O PROGRAMA.
comandoPrompt()
