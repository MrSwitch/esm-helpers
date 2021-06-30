import fs from 'fs';
import {join, dirname} from 'path';
import {fileURLToPath} from 'url';

/**
 * requireJSON
 * @param {object} meta - esm import.meta object
 * @param {string} relativePath - file path
 * @returns {*} JSON Content
 */
export function requireJSON(meta, relativePath) {
	const __dirname = dirName(meta);

	return JSON.parse(fs.readFileSync(join(__dirname, relativePath)));
}

/**
 * @param {object} meta - esm import.meta object
 * @returns {string} Directory name
 */
export function dirName(meta) {
	const __filename = fileURLToPath(meta.url);
	return dirname(__filename);
}
