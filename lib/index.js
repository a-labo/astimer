/**
 * Async timer
 * @module atimer
 * @version 1.0.0
 */

'use strict'

const create = require('./create')
const  ATimer = require('./atimer')

let lib = create.bind(this)

Object.assign(lib, create, {
  create,
  ATimer
})

module.exports = lib
