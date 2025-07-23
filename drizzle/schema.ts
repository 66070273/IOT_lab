import { pgTable, varchar, date, uuid } from 'drizzle-orm/pg-core'

export const students = pgTable('students', {
  id: uuid('id').primaryKey(),
  studentId: varchar('student_id', { length: 20 }).notNull(),
  firstName: varchar('first_name', { length: 50 }).notNull(),
  lastName: varchar('last_name', { length: 50 }).notNull(),
  dob: date('dob').notNull(),
  gender: varchar('gender', { length: 10 }).notNull(),
})
