import { Request, Response } from 'express';

const express = require('express');

const app = express();

app.get('/', (req: Request, res: Response) => res.send('<h1>Hello World!!</h1>'));
app.get('/api', (req: Request, res: Response) => res.send('Not available yet'));

app.listen(3000, () => console.log('App is listening on port 3000'));
