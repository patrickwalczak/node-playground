import express from 'express';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

// serves all static files like ./styles.css, index.html and so on
app.use(express.static('./navbar-app'));

// You explicitly control what happens at /.
// Useful if you want to add custom logic before serving the file (logging, auth checks, etc.).
// express.static handles all static files as well as serves index.html
// app.get('/', (req, res) => {
// 	res.status(200).sendFile(path.resolve(__dirname, './navbar-app/index.html'));
// });

app.use((req, res) => {
	res.status(404).send('<h1>Resource not found</h1>');
});

app.listen(5000);
