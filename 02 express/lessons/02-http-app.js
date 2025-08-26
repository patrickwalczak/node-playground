import http from 'http';
import { readFileSync } from 'fs';

const homePage = readFileSync('../navbar-app/index.html');
const homeStyles = readFileSync('../navbar-app/styles.css');
const homeImage = readFileSync('../navbar-app/logo.svg');
const homeLogic = readFileSync('../navbar-app/browser-app.js');

/*

/
/.well-known/appspecific/com.chrome.devtools.json
/styles.css
/logo.svg
/browser-app.js

🔹 When you visit /

You type http://localhost:5000/ in your browser.
Browser makes one HTTP request → GET /.
Your server responds with index.html (in your code, that’s homePage).
Browser parses the HTML.

For each resource (styles.css, logo.svg, browser-app.js):
The browser sends separate requests:
GET /styles.css
GET /logo.svg
GET /browser-app.js
Your server handles them one by one with the if/else logic you wrote.

*/

const server = http.createServer((req, res) => {
	const url = req.url;

	if (url === '/') {
		res.writeHead(200, { 'content-type': 'text/html' });
		res.write(homePage);
		res.end();
	}
	// about page
	else if (url === '/about') {
		res.writeHead(200, { 'content-type': 'text/html' });
		res.write('<h1>about page</h1>');
		res.end();
	}
	// styles
	else if (url === '/styles.css') {
		res.writeHead(200, { 'content-type': 'text/css' });
		res.write(homeStyles);
		res.end();
	}
	// image/logo
	else if (url === '/logo.svg') {
		res.writeHead(200, { 'content-type': 'image/svg+xml' });
		res.write(homeImage);
		res.end();
	}
	// logic
	else if (url === '/browser-app.js') {
		res.writeHead(200, { 'content-type': 'text/javascript' });
		res.write(homeLogic);
		res.end();
	}
	// 404
	else {
		res.writeHead(404, { 'content-type': 'text/html' });
		res.write('<h1>page not found</h1>');
		res.end();
	}
});

server.listen(5000, () => {
	console.log('Server listening on port : 5000....');
});
