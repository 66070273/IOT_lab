import { Hono } from 'hono'
import { serve } from '@hono/node-server'
import { studentRoutes } from './student'
import { config } from 'dotenv'
import dotenv from 'dotenv'
dotenv.config()
config()

const app = new Hono()
app.route('/students', studentRoutes)

const apiKey = process.env.API_SECRET_KEY
console.log('My secret key:', apiKey)

// ✅ run บน Node.js ด้วย @hono/node-server
serve({
  fetch: app.fetch,
  port: 3000,
})

console.log("✅ Server running at http://localhost:3000")
