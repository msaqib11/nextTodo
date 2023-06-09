"use client";
import { useRouter } from "next/navigation";
import { AiOutlineCheck } from "react-icons/ai";

interface taskIdProps {
    taskId: number;
  }
const ManageStatus: React.FC<taskIdProps> = ({ taskId }) => {   
    const {refresh} = useRouter()
      const manageTask = async (taskId: number) => {
        try {
          if(taskId){
              const res = await fetch("/api/todo", {
                  method: "PATCH",
                  cache: "no-store",
                  headers: {
                    "content-type": "application/json",
                  },
                  body: JSON.stringify({
                      id: taskId,
                      status: false,
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
      <AiOutlineCheck
        className="w-5 h-5 font-bold text-green-800 hover:text-green-300 cursor-pointer"
        onClick={() => manageTask(taskId)}
      />
    </div>
  );
};

export default ManageStatus;
