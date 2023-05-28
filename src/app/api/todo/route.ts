import {db} from "@vercel/postgres"
import { NextRequest,NextResponse } from "next/server";

export async function GET(request: NextRequest){
    const client = await db.connect();
    try {
        await client.sql`
        CREATE TABLE IF NOT EXISTS tasks (
          id SERIAL PRIMARY KEY,
          title VARCHAR(255) NOT NULL,
          status BOOLEAN NOT NULL DEFAULT true
        )
      `
     let allTasks = await client.sql`SELECT * FROM TASKS`
     return NextResponse.json({data:allTasks})
    } catch (error) {
        console.log(error);
        return NextResponse.json({message:"Something went wrong"})
    }
}

export async function POST(request:NextRequest){
    let req = await request.json();
    console.log(req);
     
    let client = await db.connect();
    try {
         if(req.title){
            let task  = await client.sql`INSERT INTO tasks(title) VALUES (${req.title})`
            console.log(task);
            
            return NextResponse.json({message:"Data Added successfully"})
        }else
            throw new Error("Task field is required");
        }
    catch (error) {
        console.log(error);
        return  NextResponse.json({ message: (error as { message: string }).message });
    }
}