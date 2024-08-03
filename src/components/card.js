import React from "react";
import { Link } from "react-router-dom";



function Card(props) {
    return (
        <div className="flex flex-col items-center h-[300px] w-[280px] p-4  bg-white shadow-sm shadow-slate-500 border-solid border-slate-300 rounded-2xl mt-4 mb-6 hover:scale-110 transition duration-500">
            <div className="h-[60px] w-[60px] bg-green-300 rounded-full flex items-center justify-center mb-[4px]"><i class={props.source}></i></div>
            <h1 className="text-lg font-semibold text-blue-950 mb-[6px]">{props.title}</h1>
            <p className="text-gray-700 text-sm pl-2">{props.content}</p>
            <button className="px-4 mx-7 my-7  text-blue-950 border-solid border-[1.5px] border-green-400 text-xs rounded-2xl py-[8px] font-semibold shadow-sm hover:bg-green-400 hover:text-white"><Link to={props.text}>Learn More</Link> </button>
           
        </div>

    );
}

export default Card;
