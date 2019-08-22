'use strict'

/**
 * LinhaDeComando
 *
 * @file dev.js
 * @namespace root
 * @description Inicia em ambiente de desenvolvimento.
 * @since v0.16.0
 *
 * @copyright (c)2018 - Estúdio Digital Bocca - https://estudiodigitalbocca.com.br/
 * @author Gabriel Bertola Bocca - gabriel at estudiodigitalbocca.com.br
 *
 * @version v1.0.0
 */

process.env.EDB_ENV = 'dev'

require('./comando')
