import express from 'express';

const server = express();
const port = 3333;

server.get('/', (req, res) => res.json({ message: 'Hello World' }));

server.listen(port);
