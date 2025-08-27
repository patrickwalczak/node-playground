import express from 'express';

const app = express();

import { products } from './data.js';

app.get('/', (req, res) => {
	res.send('<h1> Home Page</h1><a href="/api/products">products</a>');
});

app.get('/api/products', (req, res) => {
	res.json(products);
});

app.get('/api/products/:productID', (req, res) => {
	const productId = req.params.productID;

	if (!productId || isNaN(productId)) {
		return res.status(400).send('Please provide product id');
	}

	const product = products.find((p) => p.id === Number(req.params.productID));

	if (!product) {
		return res.status(404).send('Product not found');
	}

	const { id, name, image } = product;

	res.json({ id, name, image });
});

app.get('/api/products/:productID/reviews/:reviewID', (req, res) => {
	console.log(req.params); // [Object: null prototype] { productID: '1', reviewID: '2' }
	res.send('hello world');
});

// http://localhost:5000/api/v1/query?search=albany0&limit=5
app.get('/api/v1/query', (req, res) => {
	// console.log(req.query); // { search: 'albany', limit: '5' }

	const { search, limit } = req.query;
	let sortedProducts = [...products];

	if (search) {
		sortedProducts = sortedProducts.filter((product) => {
			return product.name.startsWith(search);
		});
	}
	if (limit) {
		sortedProducts = sortedProducts.slice(0, Number(limit));
	}
	if (sortedProducts.length < 1) {
		return res.status(200).json({ sucess: true, data: [] });
	}
	res.status(200).json(sortedProducts);
});

app.listen(5000);
