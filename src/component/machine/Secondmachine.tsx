import { useMachine } from "@xstate/react";
import React from "react";
import { todosMachine } from "../xstate/Second";
function Secondmachine() {
  const [state, send] = useMachine(todosMachine);
  return (
    <div>
      {JSON.stringify(state.value)}

      <button
        onClick={() => {
          send({ type: "TODOS_LOADED", todos: "pakistan" });
        }}
      >
        one
      </button>
      <button
        onClick={() =>
          send({ type: "LOADING_FAILED", errorMessage: "Failed to load todos" })
        }
      >
        one
      </button>
    </div>
  );
}

export default Secondmachine;
