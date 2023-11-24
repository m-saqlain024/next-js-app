const { createMachine } = require("xstate");
export const myMachine = createMachine({
  initial: "pending",
  states: {
    pending: {
      on: {
        RESOLVE: "resolved",
        REJECT: {
          target: "rejected",
        },
      },
    },
    resolved: {
      type: "final",
    },
    rejected: {
      type: "final",
    },
  },
});


// const { initialState } = myMachine;


// console.log(initialState.value)


// const nextState = myMachine.transition(initialState, { type: "resolved" });

// console.log(nextState);