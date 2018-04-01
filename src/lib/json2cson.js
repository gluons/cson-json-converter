const CSON = require('cson-parser');

/**
 * Convert JSON string to CSON string.
 *
 * @export
 * @param {string} jsonStr JSON string.
 * @returns {string}
 */
export default function json2cson(jsonStr) {
	let jsonObj = JSON.parse(jsonStr);
	return CSON.stringify(jsonObj, null, 2);
}
