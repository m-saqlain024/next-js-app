"use client";
import { useMachine } from "@xstate/react";
import React from "react";
import { myMachine } from "../../machines/myFirstMachines";
import { todosApp } from "../../todosAppMachines/todosApp";

function page() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [state, send] = useMachine(todosApp);
  return (
    <div>
      {JSON.stringify(state.value)}
      <button
        onClick={() => {
          send({type : "todos loaded"});
        }}
      >
        mousein
      </button>
      <button
        onClick={() => {
          send({ type: "loading todos failed" }, todos: [ "fuck you"]);
        }}
      >
        mouseout
      </button>
    </div>
  );
}

export default page;
