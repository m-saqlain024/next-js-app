"use client"
import { useMachine } from '@xstate/react'
import React from 'react'
import { First } from "../../../xstate/First"

function Firstmachine() {
    const [state, send] = useMachine(First);
  return (
    <div>
      {JSON.stringify(state.value)}

      <button onClick={() => send({type :"Go"})}> Go</button>
      <button onClick={() => send({type : "Stop"})}> stop</button>
    </div>
  );
}

export default Firstmachine
