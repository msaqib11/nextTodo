import {sql} from "@vercel/postgres"
import { NextRequest,NextResponse } from "next/server";
import {db,allTodo,todoTable,addTodo} from "@/lib/drizzle"
export async function GET(request: NextRequest){
    try {
        await sql`
        CREATE TABLE IF NOT EXISTS tasks (
          id SERIAL PRIMARY KEY,
          title VARCHAR(255) NOT NULL,
          status BOOLEAN NOT NULL DEFAULT true
        )
      `
     const allTasks = await db.select().from(todoTable);
    //  console.log(allTasks.find((item)=> item.id===1));
     console.log(allTasks);
     
     return NextResponse.json({allTodos:allTasks})
    } catch (error) {
        console.log((error as {message:string}).message);
        return NextResponse.json({message:"Something went wrong"})
    }
}

export async function POST(request:NextRequest){
    let req = await request.json();
    //body for our task
    const newTask: addTodo = {
        task: req.title,
        status : req.status,
      };
    try {
         if(req.title){
            //insert via drizzle orm
             const addTask  = await db.insert(todoTable).values(newTask).returning()
             console.log(addTask);
            return NextResponse.json({message:"Data Added successfully"})
        }else
            throw new Error("Task field is required");
        }
    catch (error) {
        console.log((error as { message: string }).message);
        return  NextResponse.json({ message: (error as { message: string }).message });
    }
}