import { sql } from "@vercel/postgres"
import { InferModel } from "drizzle-orm"
import {boolean, pgTable, serial, varchar} from "drizzle-orm/pg-core"
import {drizzle} from "drizzle-orm/vercel-postgres"

//schema for todoTable , table was already created on vercel postgres
export const todoTable = pgTable("tasks",{
    id : serial("id").primaryKey(),
    task : varchar("title",{length:255}).notNull(),
    status : boolean("status").default(true).notNull()
})
//definig types for our todotable for insert and select
export type allTodo = InferModel<typeof todoTable>
export type addTodo = InferModel<typeof todoTable,"insert">

//connecting our drizzle to vercel postgres
export const db = drizzle(sql)