'use strict'

const atimer = require('atimer')

async function tryExample () {
  let timer = atimer()

  // Start measuring
  timer.tick()

  // Do something async
  /* ... */

  // Get took time from last tick
  let took = timer.tick()
  console.log(`Time took: ${took}ms`) // show time from last tick
}

tryExample()
