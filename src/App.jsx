import { useState } from "react";
import Navbar from "./components/Navbar";
import Hr from "./components/Hr";
import Todo from "./components/todo";

function App() {
  const [task, setTask] = useState("");
  const [taskArray, setTaskArray] = useState([]);
  const [count, setcount] = useState(0);

  const handleEdit = () => {};
  const handleChange = (e) => {
    setTask(e.target.value);
  };
  const handleDelete = () => {};
  const handleCompleted = () => {};
  const handleAdd = () => {
    setTaskArray([...taskArray,{id :count ,text:task,isCompleted:false}])
    setcount(count+1)
    setTask("")
    console.log(taskArray)
  };

  return (
    <>
      <div className="bg-[#388186] w-full h-[100vh] flex">
        <div className="border border-transparent text-white overflow-hidden rounded-xl h-[90vh] bg-[#FDF6F6] w-4/5 absolute  translate-x-[-50%] translate-y-[-50%] left-1/2 top-1/2">
          <Navbar />
          {/* <Hr /> */}
          <div>
            <div className="inp flex gap-4 py-4 mx-auto items-center justify-center h-[10vh] bg-[#FDF6F6]">
              <input
                type="text"
                value={task}
                onChange={handleChange}
                className="w-2/5 h-9 rounded-md flex outline-none text-black px-1 items-center border border-[#A5E9E1]"
              />
              <button onClick={handleAdd} className="px-3 h-9 rounded-md bg-[#388186] text-sm font-semibold">
                Add
              </button>
            </div>
            {/* <Hr /> */}
            <div className="data grid grid-cols-5 gap-x-4 gap-y-8 px-7 overflow-y-scroll h-[70vh] py-4 pb-8 no-scrollbar">
              {taskArray.map(item=>{
                return <Todo val={item.text} key={item.id}/>
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
