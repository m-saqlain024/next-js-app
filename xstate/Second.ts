import { type } from "os";
import { createMachine } from "xstate";

export const todosMachine = createMachine({
  id: "Todo machine",
  initial: "loading",
  states: {
    loading: {
      on: {
        TODOS_LOADED: {
          target: "success",
        },
        LOADING_FAILED: {
          target: "failure",
        },
      },
    },
    success: {},
    failure: {},
  },
});
