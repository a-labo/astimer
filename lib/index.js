/**
 * Async timer
 * @module astimer
 * @version 2.0.2
 */

'use strict'

const create = require('./create')
const  AsTimer = require('./astimer')

let lib = create.bind(this)

Object.assign(lib, create, {
  create,
  AsTimer
})

module.exports = lib
