import Image from "next/image";
import TodoList from "../components/TodoList";

export default function Home() {
  const currentDate = new Date();

  const month = currentDate.toLocaleDateString("en-US", { month: "long" });
  const day = currentDate.getDate();
  const year = currentDate.getFullYear();

  const formattedDate = `${month} ${day}, ${year}`;
  return (
    <main className="bg-gradient-to-tr from-primary to-secondary h-screen flex justify-center items-center">
      <div className="px-6 py-3 bg-white w-full max-w-sm rounded-lg ">
        <h1 className="text-2xl font-bold">{formattedDate}</h1>
        <div className="flex items-center gap-2 text-slate-600 font-semibold text-sm mb-2">
          <p> 5 completed,</p>
          <p>5 incomplete</p>
        </div>
        <div className="h-0.5 w-full bg-black/[0.05]"></div>
        <div>
          {/* @ts-ignore */}
          <TodoList />
        </div>
        <div className="w-1/2 mx-auto h-[4px] bg-slate-600 rounded"></div>
      </div>
    </main>
  );
}
