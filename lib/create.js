/**
 * Create a timer.
 * @function create
 * @returns {ATimer}
 */

'use strict'

const ATimer = require('./atimer')

/** @lends create */
function create (config) {
  return new ATimer(config)
}

module.exports = create
