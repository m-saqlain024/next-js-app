// import UseEffect from "@/component/reactHooks/UseEffect";
import React from "react";
import { createActor } from "xstate";
import { feedbackMachine } from "../../xstate/Third";
import { useMachine } from "@xstate/react";
import Todo from "../component/machine/todo"
function page() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  // const [state, send] = useMachine(feedbackMachine);
  const feedbackActor = createActor(feedbackMachine);

  feedbackActor.subscribe((state) => {
    console.log(state.value);
  });
  feedbackActor.start();
  feedbackActor.send({ type: "feedback.good" });
  return (
    <div>
  <Todo />
    </div>
  );
}

export default page;
