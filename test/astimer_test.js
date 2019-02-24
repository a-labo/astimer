/**
 * Test case for astimer.
 * Runs with mocha.
 */
'use strict'

const AsTimer = require('../lib/astimer.js')
const { ok } = require('assert')

describe('astimer', function () {
  this.timeout(3000)

  before(async () => {

  })

  after(async () => {

  })

  it('AsTimer', async () => {
    let timer = new AsTimer()
    timer.tick()
    await timer.sleep(10)
    ok(timer.tick() >= 10)
    ok(timer.startAt)
  })
})

/* global describe, before, after, it */
