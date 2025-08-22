/* 

📦 What it is
The http module is a built-in Node.js module.
It allows you to create an HTTP server and handle requests/responses, or act as a client to make requests.
This is the foundation of web servers built with Node (Express is built on top of it).

*/

import http from 'http';

const server = http.createServer((request, response) => {
	// req = incoming request (method, URL, headers, etc.)
	// res = response object (we send data back)
	// req.url = URL of the request
	// req.method = HTTP method (GET, POST, etc.)
	// req.headers = headers of the request

	if (request.url === '/') {
		response.end('Welcome to our home page');
	} else if (request.url === '/about') {
		response.end('Here is our short history');
	} else {
		response.end(`
    <h1>Oops!</h1>
    <p>We can't seem to find the page you are looking for</p>
    <a href="/">back home</a>
    `);
	}
});

server.listen(5000);
