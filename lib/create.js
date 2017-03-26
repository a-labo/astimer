/**
 * Create a timer.
 * @function create
 * @returns {AsTimer}
 */

'use strict'

const AsTimer = require('./astimer')

/** @lends create */
function create (config) {
  return new AsTimer(config)
}

module.exports = create
