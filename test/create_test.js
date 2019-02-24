/**
 * Test case for create.
 * Runs with mocha.
 */
'use strict'

const create = require('../lib/create.js')
const { ok } = require('assert')

describe('create', function () {
  this.timeout(3000)

  it('Create', () => {
    let created = create()
    ok(created)
  })
})

/* global describe, before, after, it */
