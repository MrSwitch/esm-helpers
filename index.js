import fs from 'fs';
import {join, dirname} from 'path';
import {fileURLToPath} from 'url';

export function requireJSON(meta, relativePath) {
	const __dirname = dirName(meta);

	return JSON.parse(fs.readFileSync(join(__dirname, relativePath)));
}

export function dirName(meta) {
	const __filename = fileURLToPath(meta.url);
	return dirname(__filename);
}
