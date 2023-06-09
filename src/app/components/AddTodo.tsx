"use client";
import { addTodo } from "@/lib/drizzle";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";

const AddTodo = () => {
  const [task, setTask] = useState<addTodo | null>(null);
  const {refresh} = useRouter()
  const handleSubmit = async () => {
    try {
      if (task) {
        const res = await fetch("/api/todo", {
          method: "POST",
          body: JSON.stringify({
            title: task.task,
          }),
        });
        console.log(res.ok);
        refresh();
      }

    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <form className="w-full flex mt-4 mb-4 items-center gap-x-2">
        <input
          type="text"
          className="w-full px-4 py-3 border border-primary rounded-full"
          placeholder="Add New Todo"
          onChange={(e) => setTask({ task: e.target.value })}
          required
        />
        <button type="submit" onClick={handleSubmit} className="flex-0">
          <AiOutlinePlusCircle className="w-7 h-7 text-green-600 cursor-pointer hover:text-green-300" />
        </button>
      </form>
    </div>
  );
};

export default AddTodo;
