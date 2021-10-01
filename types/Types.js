/**
 * @typedef {string} Color
 */

/**
 * @typedef {object} PantsClass
 * @property {string} id
 * @property {Color} color
 * @property {number} hip
 */

/**
 * @typedef {object} ShirtsClass
 * @property {string} id
 * @property {number} height
 * @property {number} width
 */

/**
 * @typedef {object} MPants
 * @property {Color} color
 * @property {number} hip
 */

/**
 * @typedef {object} MShirts
 * @property {number} height
 * @property {number} width
 */

/**
 * @template {string} T
 * @typedef {object} Base
 * @property {string} id
 * @property {T} typeIdentifier
 */

/**
 * @typedef {MPants&Base<'pant-object'>} PantsObj
 */

/**
 * @typedef {MShirts&Base<'shirt-object'>} ShirtsObj
 */
