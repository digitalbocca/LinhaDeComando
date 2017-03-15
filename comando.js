"use strict"

const readline = require('readline')
const colors = require('colors')
const Table = require('cli-table')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

let inicio = function(){
  /*
  console.log('\n')
  console.log('+------------------------+')
  console.log('|   INICIANDO PROGRAMA   |')
  console.log('+------------------------+')
  console.log('\n')
  */
  let table = new Table({
      head: ['          INICIANDO PROGRAMA'],
      colWidths: [40],
      style: {
        head: ['black','bold']//,
        //border: ['green']
      }
  })
  console.log(table.toString())
}

let copy = function(){
    //console.log('\n')
    //console.log('(c)2017 - Estúdio Digital Bocca'.green)
    //console.log('\n')
    let table = new Table({
          head: ['   (c)2017 - Estúdio Digital Bocca'],
          colWidths: [40],
          style: {
            head: ['green','bold'],
            border: ['green']
          }
    })
    console.log(table.toString())
}

let encerrar = function(){
  rl.close()
}

let comandoPrompt = function(){
  
  rl.question('COMANDO: ', (comando) => {

    console.log(`Executando o Comando: ${comando} \n`)
    
    if(comando === 'inicio'){
      inicio()
      comandoPrompt()
    }
    else if(comando === 'copy'){
      copy()
      comandoPrompt()
    }
    else if(comando === 'sair'){
      encerrar()
    }
    else {
      console.log('Comando Inexistente!!!'.red)
      //console.log('\n')
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

comandoPrompt()