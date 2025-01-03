import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck,faPen,faTrashCan } from "@fortawesome/free-solid-svg-icons";
import Hr from "./Hr";

const Todo = ({val}) => {
  return (
    <div className="flex flex-col h-[26vh] rounded-lg bg-[#A5E9E1] relative">
      <div className="flex justify-center py-1 text-xs text-[#388186] font-semibold">3-2-25</div>
      <Hr />
      <textarea disabled defaultValue={val} className="flex mb-5 px-3 text-sm overflow-y-scroll no-scrollbar text-[#388186] font-bold h-full outline-none bg-[#A5E9E1]"/>
      <div className="action flex absolute translate-x-[-50%] translate-y-[50%] left-1/2 bottom-0 gap-2">
        <button className="text-lg w-10 h-10 items-center justify-center rounded-full bg-[#388186]">
          <FontAwesomeIcon icon={faPen} />
        </button>
        <button className="text-lg w-10 h-10 items-center justify-center rounded-full bg-[#388186]">
          <FontAwesomeIcon icon={faCheck} />
        </button>
        <button className="text-lg w-10 h-10 items-center justify-center rounded-full bg-[#388186]">
          <FontAwesomeIcon icon={faTrashCan} />
        </button>
      </div>
    </div>
  );
};

export default Todo;
