import express from 'express';

const app = express();

app.get('/', (req, res) => {
	console.log('user hit the resource');
	res.status(200).send('Home Page');
});

app.get('/about', (req, res) => {
	res.status(200).send('About Page');
});

// Catch-all 404 handler
app.use((req, res) => {
	res.status(404).send('<h1>Resource not found</h1>');
});

// app.get
// app.post
// app.put
// app.delete
// app.all
// app.use => Mounts middleware for processing requests (logging, parsing JSON, authentication, etc.).
// app.listen => Starts the server.

// res.send(), res.json(), res.status()
// Methods for sending responses

/*

app.all(path, callback)

It matches all HTTP methods (GET, POST, PUT, PATCH, DELETE, etc.) for a given route.
Useful when you want the same logic regardless of the request type.
Often used for things like authentication, logging, or blocking certain routes.

*/

/*

🔹 app.all(path, callback)

Runs for all HTTP methods (GET, POST, PUT, DELETE, etc.)
But only for the specific path you define.
Typically used when you want all requests to a given route to trigger some logic.

*/

app.all('/admin', (req, res, next) => {
	console.log('Admin area accessed');
	next(); // passes control to the next matching handler
});

/*

🔹 app.use(path, callback)

Mounts middleware that runs for any HTTP method as well.
But it applies to the path and everything nested inside it.
Doesn’t match exactly, it matches prefixes.

*/

app.use('/admin', (req, res, next) => {
	console.log('Middleware for all /admin routes');
	next();
});

// Will run for /admin, /admin/users, /admin/settings, etc.
// Runs no matter what the method is.

app.listen(5000, () => {
	console.log('server is listening on port 5000...');
});
