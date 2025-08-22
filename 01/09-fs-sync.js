/* 

📦 fs module in Node.js
fs stands for File System.
It’s a built-in Node.js module that lets you interact with the computer’s file system.
With fs, you can read, write, update, delete, and manage files and directories.

*/

import { readFileSync, writeFileSync } from 'fs';

// fs.readFile(path, encoding, callback) → read a file (non-blocking, async)
// fs.readFileSync(path, encoding) → read a file (blocking)
const first = readFileSync('./content/first.txt', 'utf8');
console.log(first);

const second = readFileSync('./content/second.txt', 'utf8');
console.log(second);

// fs.writeFileSync(path, content) → write/overwrite a file
// fs.appendFileSync(path, content) → add to an existing file
// fs.unlinkSync(path) → delete a file
// fs.mkdirSync(path) → create a folder

writeFileSync('./content/result-sync.txt', `Here is the result: ${first} ${second}`);
