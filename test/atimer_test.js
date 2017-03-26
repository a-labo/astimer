/**
 * Test case for atimer.
 * Runs with mocha.
 */
'use strict'

const ATimer = require('../lib/atimer.js')
const { ok } = require('assert')
const co = require('co')

describe('atimer', function () {
  this.timeout(3000)

  before(() => co(function * () {

  }))

  after(() => co(function * () {

  }))

  it('ATimer', () => co(function * () {
    let timer = new ATimer()
    timer.tick()
    yield timer.sleep(10)
    ok(timer.tick() >= 10)

  }))
})

/* global describe, before, after, it */
