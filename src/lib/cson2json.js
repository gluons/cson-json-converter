const CSON = require('cson-parser');

/**
 * Convert CSON string to JSON string.
 *
 * @export
 * @param {string} csonStr CSON string.
 * @returns {string}
 */
export default function cson2json(csonStr) {
	let jsonObj = CSON.parse(csonStr);
	return JSON.stringify(jsonObj, null, '\t');
}
