"use client";
import { todosMachine } from "@/component/machine/xstate/Second";
import { useMachine } from "@xstate/react";
// import { send } from "process";
import React from "react";
function page() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [state, send] = useMachine(todosMachine);
  return (
    <div>
      {JSON.stringify(state.value)}
      <br />
      <button onClick={() => send({ type: "Todos loaded", todo: ["hello"] })}>
        Todos loaded
      </button>
      <br />
      <button
        onClick={() =>
          send({ type: "Loading todos failed", errorMessage: "oh no .." })
        }
      >
        Loading todos failed
      </button>
    </div>
  );
}

export default page;
