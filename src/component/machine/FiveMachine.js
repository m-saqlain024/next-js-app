"use client"
import { useMachine } from "@xstate/react";
import {promiseMachine} from "../../../xstate/Five"

export const FiveMachine = () => {
  const [state, send] = useMachine(promiseMachine);

  return (
    <div>
      {/** You can listen to what state the service is in */}
      {state.matches("pending") && <p>Loading...</p>}
      {state.matches("rejected") && <p>Promise Rejected</p>}
      {state.matches("resolved") && <p>Promise Resolved</p>}
      <div>
        {/** You can send events to the running service */}
        <button onClick={() => send({ type: "RESOLVE" })}>Resolve</button>
        <button onClick={() => send({ type: "REJECT" })}>Reject</button>
      </div>
    </div>
  );
};
