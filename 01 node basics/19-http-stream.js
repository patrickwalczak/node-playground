import http from 'http';
import { createReadStream } from 'fs';

http
	.createServer(function (req, res) {
		const fileStream = createReadStream('./content/big.txt', 'utf8');
		fileStream.on('open', () => {
			fileStream.pipe(res);
			/* 
      
      🔹 What happens step by step
        fileStream is a readable stream (created with fs.createReadStream for your file).
        res is a writable stream (the HTTP response object in Node).
        .pipe() links them: every chunk of data read from the file is immediately written to the response.
        When fileStream ends, .pipe() automatically calls res.end() so the response finishes correctly.
        It also handles backpressure — if res is slower at writing than fileStream is at reading, Node will pause reading until the writable side catches up.

      */
		});
		fileStream.on('error', (err) => {
			res.end(err);
		});
	})
	.listen(5000);

/*
  
  pipe is a built-in method available on readable streams.
It lets you connect a readable stream to a writable stream so that data flows automatically from one to the other.
It also handles backpressure for you (pausing/resuming when needed).
  
  */
