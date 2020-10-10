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
 */

/**
 * @typedef {Object} AppStateBoard
 * @property {Array<AppStateGameColor>} colors
 */

/**
 * @typedef {Object} AppStateGameOptions
 * @property {Number} value
 * @property {Boolean} isDefault
 */

/**
 * @typedef {Object} AppStateConfig
 * @property {Array<AppStateGameOptions>} differences
 * @property {Array<AppStateGameOptions>} sizes
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
 * @property {AppStateBoard} board
 * @property {AppStateConfig} config
 * @property {AppStatePoints} points
 */
