/**
 * Test case for astimer.
 * Runs with mocha.
 */
'use strict'

const AsTimer = require('../lib/astimer.js')
const { ok } = require('assert')
const co = require('co')

describe('astimer', function () {
  this.timeout(3000)

  before(() => co(function * () {

  }))

  after(() => co(function * () {

  }))

  it('AsTimer', () => co(function * () {
    let timer = new AsTimer()
    timer.tick()
    yield timer.sleep(10)
    ok(timer.tick() >= 10)
    ok(timer.startAt)
  }))
})

/* global describe, before, after, it */
