"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { AiFillDelete } from "react-icons/ai";

interface taskIdProps {
  taskId: number;
}

const DeleteTask: React.FC<taskIdProps> = ({ taskId }) => {
    const {refresh} = useRouter();
  const Delete = async (taskId: number) => {
    try {
      if (taskId) {
        const res = await fetch(`/api/todo?taskId=${taskId}`, {
          method: "DELETE",
          cache: "no-store",
          headers: {
            "content-type": "application/json",
          },
        });

        console.log(res.ok);
        refresh()
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <AiFillDelete
        className="w-5 h-5 font-bold text-red-800 hover:text-red-500 cursor-pointer"
        onClick={() => Delete(taskId)}
      />
    </div>
  );
};

export default DeleteTask;
