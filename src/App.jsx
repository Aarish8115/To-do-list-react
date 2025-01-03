import { useState } from "react";
import Navbar from "./components/Navbar";
import Todo from "./components/todo";
import Hr from "./components/Hr";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faPen, faTrashCan ,faXmark } from "@fortawesome/free-solid-svg-icons";

function App() {
  const [task, setTask] = useState("");
  const [taskArray, setTaskArray] = useState([]);
  const [count, setcount] = useState(0);

  const handleEdit = (e,key) => {
    let t = taskArray.filter(item=>item.id === key) 
    setTask(t[0].text)
    let newTaskArray = taskArray.filter(item=>{
      return item.id!==key
    }); 
    setTaskArray(newTaskArray) 
  };
  const handleChange = (e) => {
    setTask(e.target.value);
  };
  const handleDelete = (e, id) => {
    let newTaskArray = taskArray.filter((item) => {
      return item.id !== id;
    });
    setTaskArray(newTaskArray);
  };
  const handleCompleted = (e, key) => {
    let index = taskArray.findIndex((item) => {
      return item.id === key;
    });
    let newTaskArray = [...taskArray];
    newTaskArray[index].isCompleted = !newTaskArray[index].isCompleted;
    setTaskArray(newTaskArray);
  };
  const handleAdd = () => {
    setTaskArray([...taskArray, { id: count, text: task, isCompleted: false }]);
    setcount(count + 1);
    setTask("");
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
              <button
                onClick={handleAdd}
                className="px-3 h-9 rounded-md bg-[#388186] text-sm font-semibold"
              >
                Add
              </button>
            </div>
            {/* <Hr /> */}
            <div className="data grid grid-cols-5 gap-x-4 gap-y-8 px-7 overflow-y-scroll h-[70vh] py-4 pb-8 no-scrollbar">
              {taskArray.map((item) => {
                return (
                  <div
                    key={item.id}
                    className={item.isCompleted?"flex flex-col h-[26vh] rounded-lg bg-[#15514a] relative":"flex flex-col h-[26vh] rounded-lg bg-[#A5E9E1] relative"}
                  >
                    <div className="flex justify-center py-1 text-xs text-[#388186] font-semibold">
                      3-2-25
                    </div>
                    <Hr />
                    <textarea
                      disabled
                      defaultValue={item.text}
                      className={
                        item.isCompleted
                          ? "line-through flex mb-5 px-3 text-sm overflow-y-scroll no-scrollbar text-[#388186] font-bold h-full outline-none bg-[#15514a]"
                          : "flex mb-5 px-3 text-sm overflow-y-scroll no-scrollbar text-[#388186] font-bold h-full outline-none bg-[#A5E9E1]"
                      }
                    />
                    <div className="action flex absolute translate-x-[-50%] translate-y-[50%] left-1/2 bottom-0 gap-2">
                      <button
                        onClick={(e) => {
                          handleCompleted(e, item.id);
                        }}
                        className="text-lg w-10 h-10 items-center justify-center rounded-full bg-[#388186]"
                      >
                        {item.isCompleted?<FontAwesomeIcon icon={faXmark} />:<FontAwesomeIcon icon={faCheck} />}
                      </button>
                      <button onClick={(e)=>{handleEdit(e,item.id)}} className="text-lg w-10 h-10 items-center justify-center rounded-full bg-[#388186]">
                        <FontAwesomeIcon icon={faPen} />
                      </button>
                      <button
                        onClick={(e) => {
                          handleDelete(e, item.id);
                        }}
                        className="text-lg w-10 h-10 items-center justify-center rounded-full bg-[#388186]"
                      >
                        <FontAwesomeIcon icon={faTrashCan} />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
