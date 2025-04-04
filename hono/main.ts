import { Hono } from 'npm:hono'

const app = new Hono()

app.get('/api/hello', (c) => c.text('Hello Deno!', 200))

Deno.serve({ port: 3031 }, app.fetch)