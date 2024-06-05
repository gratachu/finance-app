import { Hono } from 'hono'
import { handle } from 'hono/vercel'
import accounts from "@/app/api/[[...route]]/accounts";

export const runtime = 'edge';

const app = new Hono().basePath('/api')

app.get("/hello", (c => {
  return c.json({ hello: 'world' })
}))

const routes = app
  .route('/accounts', accounts)
export const GET = handle(app)
export const POST = handle(app)

export type AppType = typeof routes