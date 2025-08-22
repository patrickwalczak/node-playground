import { readFile, writeFile } from 'fs';

console.log('start');
readFile('./content/first.txt', 'utf8', (err, result) => {
	if (err) {
		console.log(err);
		return;
	}
	const first = result;
	readFile('./content/second.txt', 'utf8', (err, result) => {
		if (err) {
			console.log(err);
			return;
		}
		const second = result;
		writeFile('./content/result-async.txt', `Here is the result : ${first}, ${second}`, (err, result) => {
			if (err) {
				console.log(err);
				return;
			}
			console.log('done with this task');
		});
	});
});
console.log('starting next task');

import { promises as fs } from 'fs';

async function run() {
	try {
		// Write file
		await fs.writeFile('./content/testasync.txt', 'Hello Async FS!');
		console.log('File written!');

		// Read file
		const data = await fs.readFile('./content/testasync.txt', 'utf8');
		console.log('File content:', data);
	} catch (err) {
		console.error('Error:', err);
	}
}

run();
