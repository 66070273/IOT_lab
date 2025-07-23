import { Hono } from 'hono'
import { db } from './db'
import { students } from '../drizzle/schema'
import { eq } from 'drizzle-orm'
import { v4 as uuidv4 } from 'uuid'

export const studentRoutes = new Hono()

studentRoutes.get('/', async (c) => {
  const result = await db.select().from(students)
  return c.json(result)
})

studentRoutes.get('/:id', async (c) => {
  const id = c.req.param('id')
  const result = await db.select().from(students).where(eq(students.id, id))
  if (result.length === 0) return c.notFound()
  return c.json(result[0])
})

studentRoutes.post('/', async (c) => {
  const body = await c.req.json()
  const newStudent = { ...body, id: uuidv4() }
  await db.insert(students).values(newStudent)
  return c.json(newStudent, 201)
})

studentRoutes.put('/:id', async (c) => {
  const id = c.req.param('id')
  const body = await c.req.json()
  await db.update(students).set(body).where(eq(students.id, id))
  return c.text('Updated')
})

studentRoutes.delete('/:id', async (c) => {
  const id = c.req.param('id')
  await db.delete(students).where(eq(students.id, id))
  return c.text('Deleted')
})
