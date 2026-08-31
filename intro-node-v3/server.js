import http from 'node:http'

const server = http.createServer((request, response) => {
 
  response.setHeader('Content-Type', 'text/html; charset=utf-8');
  response.end(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>Node playground</title>
      </head>
      <body>
        <h1>Hello from Node.js</h1>
        <p>To zostało wysłane przez mój serwer.</p>
      </body>
    </html>
  `);
})


server.listen(3001, () => {
  console.log('Server is listening');
})