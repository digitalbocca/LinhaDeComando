'use strict'

// VAMOS USAR READLINE PARA LER O VALOR DIGITADO
const readline = require('readline')

// COLORS E TABLE SÃO APENAS PARA A FORMATAÇÃO DO TEXTO
const colors = require('colors')
const Table = require('cli-table')

// CRIANDO A INTERFACE DE READLINE
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

// COMANDO inicio
let inicio = function () {
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
let copy = function () {
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
let encerrar = function () {
  rl.close()
}

// FUNÇÃO QUE FICA AGUARDANDO O COMANDO
let comandoPrompt = function () {
  rl.question('COMANDO: ', (comando) => {
    console.log(`Executando o Comando: ${comando} \n`)
    if (comando === 'inicio') {
      inicio()
      comandoPrompt()
    } else if (comando === 'copy') {
      copy()
      comandoPrompt()
    } else if (comando === 'sair') {
      encerrar()
    } else {
      console.log('Comando Inexistente!!!'.red)
      // console.log('\n')
      console.log('+------------------------+')
      console.log('|    LISTA DE COMANDOS   |')
      console.log('+------------------------+')
      console.log('| inicio                 |')
      console.log('| copy                   |')
      console.log('| sair                   |')
      console.log('+------------------------+')
      console.log('\n')
      comandoPrompt()
    }
  })
}

// INICIA O PROGRAMA.
comandoPrompt()
