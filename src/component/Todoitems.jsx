// import React from 'react'
import non_tickicon from "../Images/non_tick.png";
import delete_icon from "../Images/delete.png";

// eslint-disable-next-line react/prop-types
const Todoitems = ({text}) => {
  return (
    <div className="flex items-center my-3 gap-2">
      <div className="flex flex-1 item-center cursor-pointer  text-2xl">
        <img className="w-5 h-5 ml-2 mt-2" src={non_tickicon} alt="" />
        <p className="text-slate-700 ml-3  text-[19px]">
            {text}</p>
      </div>
      <img className="w-5 cursor-pointer mr-2" src={delete_icon} alt="" />
    </div>
  );
};

export default Todoitems;
