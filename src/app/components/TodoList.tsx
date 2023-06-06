import { allTodo } from "@/lib/drizzle";
import { AiOutlineCheck } from "react-icons/ai";
import { AiFillDelete } from "react-icons/ai";

const getData = async () => {
  try {
    const res = await fetch("api/todo", {
      method: "GET",
      headers: {
        "content-type": "application/json",
        "Cache-Control": "no-cache, no-store, must-revalidate",
        Pragma: "no-cache",
        Expires: "0",
      },
    });
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    const result = await res.json();
    console.log(result);
    return result;
  } catch (err) {
    console.log(err);
  }
};

const TodoList = async () => {
  const Todos: {allTodos :allTodo[]} = await getData();
  
   return (
    <>
      <p className="text-slate-800 font-semibold tracking-wider text-sm mt-2">
        Incomplete
      </p>

      {Todos.allTodos.map((item)=>(
      <div className="px-4 py-4 bg-slate-100  rounded-lg flex items-center justify-between gap-3 m-3" key={item.id}>
        {/* <div className="w-3 h-3 bg-secondary rounded-full"></div> */}
        <p className="text-base leading-4">{item.task}</p>
        <div className="flex gap-2">
          <AiOutlineCheck className="w-5 h-5 font-bold text-green-800 hover:text-green-300 cursor-pointer" />
          <AiFillDelete className="w-5 h-5 font-bold text-red-800 hover:text-red-500 cursor-pointer" />
        </div>
      </div>
      ))}
    </>
  );
};

export default TodoList;
