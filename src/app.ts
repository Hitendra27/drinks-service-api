import express from 'express';
import { router } from './routes/coffee_routes/routes';

export const app = express();

app.use(express.json());

app.get('/', (req, res) => res.send('Welcome to the Drinks API!'));

app.get('/coffelover', (req, res) => res.send('I like coffee!'));

app.use('/', router);