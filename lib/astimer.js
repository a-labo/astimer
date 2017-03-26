/**
 * A timer class
 * @class AsTimer
 */
'use strict'

const asleep = require('asleep')
const abind = require('abind')
const co = require('co')
const uuid = require('uuid')

/** @lends AsTimer */
class AsTimer {
  constructor () {
    const s = this
    abind(s)
    s._startAt = s._tickAt = s.now()
    s._sleeps = {}
  }

  /**
   * Sleep for duration
   * @param {number} duration
   * @returns {Promise}
   */
  sleep (duration) {
    const s = this
    return co(function * () {
      let id = uuid.v4()
      s._sleeps[ id ] = new Date()
      yield asleep(duration)
      delete s._sleeps[ id ]
    })
  }

  /**
   * Sleeps or not
   * @returns {boolean}
   */
  isSleeping () {
    const s = this
    return Object.keys(s._sleeps).length > 0
  }

  /**
   * Measure time from last tick
   * @returns {number}
   */
  tick () {
    const s = this
    let last = s._tickAt
    let now = s.now()
    s._tickAt = now
    return now - last
  }

  now () {
    return new Date()
  }

  /**
   * @property {Date} startAt
   */
  get startAt () {
    const s = this
    return s._startAt
  }
}

module.exports = AsTimer
