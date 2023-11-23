import { createMachine } from "xstate";

export const First = createMachine({
  initial: "Go",
  states: {
    Go: {
      on: {
        target: "Stop",
      },
    },
    Stop: {
      on: {
        target: "Go",
      },
    },
  },
});
