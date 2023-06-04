import {AiOutlineCheck} from "react-icons/ai"
import {AiFillDelete} from "react-icons/ai"
const TodoList = () => {
  return (
    <>
    <p className="text-slate-800 font-semibold tracking-wider text-sm mt-2">Incomplete</p>
    <div className="px-4 py-4 bg-slate-100  rounded-lg flex items-center justify-between gap-3 m-3">
        {/* <div className="w-3 h-3 bg-secondary rounded-full"></div> */}
        <p className="text-base leading-4 ">Task 1</p>
        <div className="flex gap-2">
          <AiOutlineCheck className="w-5 h-5 font-bold text-green-800 hover:text-green-300 cursor-pointer"/>
          <AiFillDelete className="w-5 h-5 font-bold text-red-800 hover:text-red-500 cursor-pointer"/>
        </div>
    </div>

    <div className="px-4 py-4 bg-slate-100  rounded-lg flex items-center justify-between gap-3 m-3">
        {/* <div className="w-3 h-3 bg-secondary rounded-full"></div> */}
        <p className="text-base leading-4 ">Task 1</p>
        <div className="flex gap-2">
          <AiOutlineCheck className="w-5 h-5 font-bold text-green-800 hover:text-green-300 cursor-pointer"/>
          <AiFillDelete className="w-5 h-5 font-bold text-red-800 hover:text-red-500 cursor-pointer"/>
        </div>
    </div>

    <div className="px-4 py-4 bg-slate-100  rounded-lg flex items-center justify-between gap-3 m-3">
        {/* <div className="w-3 h-3 bg-secondary rounded-full"></div> */}
        <p className="text-base leading-4 ">Task 1</p>
        <div className="flex gap-2">
          <AiOutlineCheck className="w-5 h-5 font-bold text-green-800 hover:text-green-300 cursor-pointer"/>
          <AiFillDelete className="w-5 h-5 font-bold text-red-800 hover:text-red-500 cursor-pointer"/>
        </div>
    </div>
    </>
    
  )
}

export default TodoList