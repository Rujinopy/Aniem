import React from "react";
import { useState } from "react";

export default function SearchComponent({changeHandler, value} : any) {
    const [input, setInput] = useState([])
    
    function inputHandler(e: any) {
        setInput(e.target.value)
        e.preventDefault()
        console.log(input);
    }
    return (
        <form className="">
            <h1>{input}</h1>
            <div className="relative">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute top-0 bottom-0 w-6 h-6 my-auto text-gray-400 left-3"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                </svg>
                <input
                    type="text"
                    placeholder="Search"
                    className="w-full py-3 pl-12 pr-4 text-gray-500 border rounded-md outline-none bg-gray-50 focus:bg-white focus:border-indigo-600"
                    value={value}
                    onChange={(e: any) => changeHandler(e)
                    }
                    
                />
            </div>
        </form>
    );
}