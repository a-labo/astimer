/**
 * A timer class
 * @class AsTimer
 */
'use strict'

const asleep = require('asleep')
const abind = require('abind')
const uuid = require('uuid')

/** @lends AsTimer */
class AsTimer {
  constructor() {
    abind(this)
    this._startAt = this._tickAt = this.now()
    this._sleeps = {}
  }

  /**
   * Sleep for duration
   * @param {number} duration
   * @returns {Promise}
   */
  async sleep(duration) {
    const id = uuid.v4()
    this._sleeps[id] = new Date()
    await asleep(duration)
    delete this._sleeps[id]
  }

  /**
   * Sleeps or not
   * @returns {boolean}
   */
  isSleeping() {
    return Object.keys(this._sleeps).length > 0
  }

  /**
   * Measure time from last tick
   * @returns {number}
   */
  tick() {
    const s = this
    let last = s._tickAt
    let now = s.now()
    s._tickAt = now
    return now - last
  }

  now() {
    return new Date()
  }

  /**
   * @property {Date} startAt
   */
  get startAt() {
    return this._startAt
  }
}

module.exports = AsTimer
