
import { createMachine } from "xstate"


export const feedbackMachine = createMachine({
  id: "feedback",
  initial: "question",
  context: {
    feedback: "",
  },
  states: {
    question: {
      meta: {
        question: "How was your experience?",
      },  
    },
  },
});


const actor = createActor(feedbackMachine);
actor.start();

console.log(actor.getSnapshot());