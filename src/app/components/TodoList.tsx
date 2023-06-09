'user client'
import { allTodo } from "@/lib/drizzle";
import ManageStatus from "./ManageStatus";
import DeleteTask from "./DeleteTask";
const getData = async () => {
  try {
    const res = await fetch("/api/todo", {
      method: "GET",
      cache: "no-store",
      headers: {
        "content-type": "application/json",
      },
    });
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    const result = await res.json();
    return result;
    // return {
    //   completedTasks
    // };
  } catch (err) {
    console.log(err);
  }
};



const TodoList = async () => {
  const completedTodos: { completedTasks: allTodo[] } = await getData();
  const incompletedTodos: { incompleteTasks: allTodo[] } = await getData();

  return (
    <>
      <p className="text-slate-800 font-semibold tracking-wider text-sm mt-2">
        Incomplete
      </p>
      <div className="max-h-48 overflow-y-scroll" id="scrollBar">
        {incompletedTodos.incompleteTasks.map((item) => (
          <div
            className="px-4 py-4 bg-white  rounded-lg flex items-center justify-between gap-3 m-3"
            key={item.id}
          >
            
            {/* <div className="w-3 h-3 bg-secondary rounded-full"></div> */}
            <p className="text-base leading-4">{item.task}</p>
            <div className="flex gap-2">
              <ManageStatus taskId = {item.id} />
              <DeleteTask taskId = {item.id} />
            </div>
          </div>
        ))}
      </div>
      <p className="text-slate-800 font-semibold tracking-wider text-sm mt-2">
        Completed
      </p>
      <div className="max-h-52 overflow-y-scroll" id="scrollBar">
        {completedTodos.completedTasks.map((item) => (
          <div
            className="px-4 py-4  rounded-lg flex items-center justify-between gap-3 m-3"
            key={item.id}
          >
            {/* <div className="w-3 h-3 bg-secondary rounded-full"></div> */}
            <p className="text-xl line-through leading-4">{item.task}</p>
            <div className="flex gap-2">
            <DeleteTask taskId = {item.id} />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default TodoList;
