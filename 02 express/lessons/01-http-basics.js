import http from 'http';

/*

The most common methods:

res.writeHead(statusCode, headers) → sets status code + headers in one go.
res.setHeader(name, value) → sets a single header.
res.getHeader(name) → reads a header value.
res.removeHeader(name) → removes a header before sending response.
res.write(chunk) → sends a piece of data to the client (can be called multiple times).
res.end([data]) → ends the response (optionally sending final data).
res.statusCode → property to set or read status code (e.g. res.statusCode = 404).

req.method → to know if it’s GET/POST/etc.
req.url → to know what resource is requested.
req.headers → to read headers.
req.on('data') + req.on('end') → to read request body (for POST/PUT/PATCH).

MIME type (short for Multipurpose Internet Mail Extensions, now used in HTTP too) tells the browser what kind of content is being sent so it knows how to handle it.

text/html → HTML document
text/css → CSS file
application/json → JSON data
image/png → PNG image
audio/mpeg → MP3 audio
video/mp4 → MP4 video

*/

const server = http.createServer((req, res) => {
	const url = req.url;

	if (url === '/') {
		res.writeHead(200, { 'Content-Type': 'text/html' });
		res.write('<h1>Home Page</h1>');
		res.end();
	} else if (url === '/about') {
		res.writeHead(200, { 'Content-Type': 'text/html' });
		res.write('<h1>About Page</h1>');
		res.end();
	} else {
		res.writeHead(404, { 'Content-Type': 'text/html' });
		res.write('<h1>Not Found</h1>');
		res.end();
	}
});

server.listen(5000, () => {
	console.log('Server listening on port : 5000....');
});
