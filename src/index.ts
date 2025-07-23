import { Hono } from 'hono'
import { serve } from '@hono/node-server'
import { studentRoutes } from './student'
import dotenv from 'dotenv'

dotenv.config()

const app = new Hono()
app.get('/', (c) => c.text('HelloWorld'))
app.route('/students', studentRoutes)

const apiKey = process.env.API_SECRET_KEY
console.log('My secret key:', apiKey)

export function callApi() {
  console.log('Using API key in callApi:', apiKey)
}

serve({
  fetch: app.fetch,
  port: 3000,
})

console.log("✅ Server running at http://localhost:3000")
