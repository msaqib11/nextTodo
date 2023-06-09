import { sql } from "@vercel/postgres";
import { NextRequest, NextResponse } from "next/server";
import { db, allTodo, todoTable, addTodo } from "@/lib/drizzle";
import { eq } from "drizzle-orm";
export async function GET(request: NextRequest) {
  try {
    await sql`
        CREATE TABLE IF NOT EXISTS tasks (
          id SERIAL PRIMARY KEY,
          title VARCHAR(255) NOT NULL,
          status BOOLEAN NOT NULL DEFAULT true
        )
      `; // Creating a table named 'tasks' with columns 'id', 'title', and 'status' if it does not exist already

      const allCompletedTasks = await db
      .select()
      .from(todoTable)
      .where(eq(todoTable.status, false)); // Retrieve tasks with status set to true

    const allIncompleteTasks = await db
      .select()
      .from(todoTable)
      .where(eq(todoTable.status, true)); 

    // console.log(allTasks.find((item)=> item.id===1));
   
    return NextResponse.json({
      completedTasks: allCompletedTasks,
      incompleteTasks: allIncompleteTasks,
    }); // Returning a JSON response containing all the tasks
  } catch (error) {
    console.log((error as { message: string }).message); // Logging the error message to the console
    return NextResponse.json({ message: "Something went wrong" }); // Returning a JSON response indicating an error occurred
  }
}


export async function POST(request: NextRequest) {
  let req = await request.json(); // Parsing the request body as JSON and assigning it to the 'req' variable

  const newTask: addTodo = {
    task: req.title, // Assigning the value of 'title' property from 'req' to 'task' property of 'newTask'
    status: req.status, // Assigning the value of 'status' property from 'req' to 'status' property of 'newTask'
  };

  try {
    if (req.title) { // Checking if 'title' property exists in 'req'
      const addTask = await db.insert(todoTable).values(newTask).returning(); // Performing the database insertion operation using the 'newTask' object
      console.log(addTask); // Logging the result of the insertion operation to the console
      return NextResponse.json({ message: "Data Added successfully" }); // Returning a JSON response indicating successful data addition
    } else {
      throw new Error("Task field is required"); // Throwing an error if 'title' property is not provided in 'req'
    }
  } catch (error) {
    console.log((error as { message: string }).message); // Logging the error message to the console
    return NextResponse.json({ message: (error as { message: string }).message }); // Returning a JSON response with the error message
  }
}

export async function DELETE(request: NextRequest) {
  const { url } = request; // Extracting the 'url' property from the 'request' object using destructuring
  const parsedUrl = new URL(url); // Parsing the 'url' using the 'URL' constructor to obtain a URL object
  const searchParams = parsedUrl.searchParams; // Accessing the 'searchParams' property of the parsed URL object to retrieve query parameters
  const taskId = searchParams.get("taskId"); // Extracting the value of the "taskId" query parameter from the search params
  
  
  try {
    if (taskId) {
      const deleteTask = await db
        .delete(todoTable) // Deleting from the todoTable
        .where(eq(todoTable.id, parseInt(taskId))) // Setting the condition for deletion based on taskId
        .returning({todoName : todoTable.task});// Returning the deleted task (optional)
        
      return NextResponse.json({ message: `${todoTable.task} has been deleted`}); // Returning a JSON response indicating successful deletion
    } else {
      throw new Error("Task ID is required"); // Throwing an error if taskId is not provided
    }
  } catch (error) {
    console.log((error as { message: string }).message); // Logging the error message
    return NextResponse.json({
      message: (error as { message: string }).message, // Returning a JSON response with the error message
    });
  }
}

export async function PATCH(request: NextRequest){
  const req = await request.json()
  try {
    const updateTodo = await db.update(todoTable)
    .set({status:req.status })
    .where(eq(todoTable.id, req.id))  
    .returning({ status:todoTable.status
              })
    return NextResponse.json({ message: `Status of task ${req.id} Updated successfully` });
    } catch (error) {
      const err = (error as { message: string }).message;
      console.log(error);
      return NextResponse.json({ message: err });
    }
}
