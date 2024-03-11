import { fastifyCors } from '@fastify/cors';
import fastify from 'fastify';

const app = fastify();

app.register(fastifyCors, {
  origin: '*',
});

import { getBooks } from "./routes";

app.register(getBooks);

const host = process.env.NODE_ENV === 'production' ? '0.0.0.0' : 'localhost';

app
  .listen({
    port: 3333,
    host,
  })
  .then(() => console.log('Server is running!'))
  .catch((err) => console.error(err));
