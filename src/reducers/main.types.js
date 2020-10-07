/**
 * @typedef {Object} AppStateGameColor
 * @property {Array<String>} value
 * @property {Boolean} isCorrect
 */

/**
 * @typedef {Object} AppStateGame
 * @property {Boolean} isStarted
 * @property {Boolean} isFinished
 * @property {number} secondsLeft
 * @property {Array<AppStateGameColor>} colors
 */

/**
 * @typedef {Object} AppStatePoints
 * @property {Number} total
 * @property {Number} correct
 * @property {Number} wrong
 * @property {Number} accuracy
 * @property {Number} tg
 */

/**
 * @typedef {Object} AppState
 * @property {AppStateGame} game
 * @property {AppStatePoints} points
 */
