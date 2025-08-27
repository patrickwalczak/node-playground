// api vs ssr

/*

🔹 API (Application Programming Interface)

In the context of web apps (like with Express, Next.js, etc.):

An API is an endpoint (a URL) that returns data, not HTML.

Usually returns JSON (but can also return XML, plain text, etc.).

Clients (React, Vue, Angular, mobile apps, etc.) call the API to fetch data.

*/

/*

🔹 SSR (Server-Side Rendering)

SSR means generating full HTML on the server before sending it to the browser.

Instead of sending only JSON, the server prepares the entire page with data and layout, so the browser can immediately render it.

This improves SEO and initial load time.

*/

import express from 'express';

const app = express();

import { products } from './data.js';

app.get('/api/products', (req, res) => {
	res.status(200).json({ success: true, data: products });
});

app.listen(5000);
