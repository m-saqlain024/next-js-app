"use client";
import React from "react";
import { createActor } from "xstate";
import { useMachine } from "@xstate/react";
import { countMachine } from "../component/machine/IncreamentDecreament";
function page() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [state, send] = useMachine(countMachine);

  const { count } = state.context;
  const handleINC = () => {
    send({ type: "INC" });
  };
  const handleDEC = () => {
    send({ type: "DEC" });
  };
 const setCount = (value) => {
   send({ type: "SET", value });
 };
  return (
    <div>
      <button onClick={handleINC}>INC</button>
      <p> Count :    {count} </p>
      <button onClick={handleDEC}>DEC</button>
      <br />
      <button onClick={() => setCount(10)}>Set Count to 10</button>
    </div>
  );
}

export default page;
