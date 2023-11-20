"use client";
import React, { useState } from "react";

function intiailFunction() {
  console.log("run mutiliple time ");
  return 0;
}

function UseState() {
  // const [count, setCount] = useState(() => {
  //   console.log("run single time ");
  //   return 0;
  // });
  // const [count, setCount] = useState(intiailFunction);
  const [state, setState] = useState({ count: 2, theme: "blue" });
  const count = state.count;
  const theme = state.theme;
  const decreamentCount = () => {
    setState(preState => {
      return { ...preState ,   count: preState.count + 1 };
    });
  };
  const increamentCount = () => {
    setCount(preState => {
      return {...preState ,  count : preState.count -1}
    });
  };
  return (
    <div className="w-screen mx-auto">
      <button
        className="p-3 block bg-slate-800 shadow-md outline-emerald-300"
        onClick={increamentCount}
      >
        -
      </button>
      <span>{count}</span>
      <button
        className="p-3 block bg-slate-800 shadow-md outline-emerald-300"
        onClick={decreamentCount}
      >
        +
      </button>
    </div>
  );
}

export default UseState;
function setCount(arg0: (preState: { count: number; }) => { count: number; }) {
  throw new Error("Function not implemented.");
}

