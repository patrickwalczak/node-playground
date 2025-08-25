/*

A stream is basically an object in Node.js that lets you read data sequentially (chunk by chunk) or write it piece by piece.
They’re useful when you work with large files, network requests, or any data source that would be inefficient to load into memory all at once.

Types:
Readable – streams you can read data from (e.g., fs.createReadStream() for files).
Writable – streams you can write data to (e.g., writing to a file or HTTP response).
Duplex – streams that are both readable and writable (e.g., TCP sockets).
Transform – duplex streams that can modify or transform the data as it passes through (e.g., zlib.createGzip() for compression).

*/

// default 64kb
// last buffer - remainder
// highWaterMark - control size
// const stream = createReadStream('./content/big.txt', { highWaterMark: 90000 })
// const stream = createReadStream('../content/big.txt', { encoding: 'utf8' })

// highWaterMark sets the buffer size (in bytes for binary data, or in characters for strings with an encoding) that a readable stream will store internally before it stops reading more data from the underlying resource.

import { createReadStream } from 'fs';

const stream = createReadStream('./content/big.txt');

stream.on('data', (result) => {
	console.log(result);
});

stream.on('error', (err) => {
	console.log(err);
});
