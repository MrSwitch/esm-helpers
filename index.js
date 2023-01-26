import {readFileSync} from 'node:fs';
import {join, dirname} from 'node:path';
import {fileURLToPath} from 'node:url';

/**
 * requireJSON
 * @param {object} meta - esm import.meta object
 * @param {string} relativePath - file path
 * @returns {*} JSON Content
 */
export function requireJSON(meta, relativePath) {
	const __dirname = dirName(meta);

	return JSON.parse(readFileSync(join(__dirname, relativePath)));
}

/**
 * @param {object} meta - esm import.meta object
 * @returns {string} Directory name
 */
export function dirName(meta) {
	const __filename = fileURLToPath(meta.url);
	return dirname(__filename);
}
