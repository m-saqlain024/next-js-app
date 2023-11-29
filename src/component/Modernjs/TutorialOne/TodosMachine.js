import { Content } from "next/font/google";
import { createMachine } from "xstate";

export const TodosMachine = createMachine(
  {
    /** @xstate-layout N4IgpgJg5mDOIC5QAoC2BDAxgCwJYDswBKAOgBsB7dCAqAAgBcKILYBiAFWdbsusgDaABgC6iUAAdWuBrgr5xIAB6IAjAE4hJVQFYAbACYNAFgAcB40dOmANCACeiU6pI6Avm7toseQqT40+PRMLOwAMlSBwdywdABm6LhkgqKKUrAycgpIymqa2vpG6mYWVrYOagDspiSV7h52+Mxwit44BMRp0rLyiioIALR6do6Deg0gbb7E5JG0jDFdGT3ZoP2WI2qqLpXqqnoHh0fjnpMY7X4kITwR-BBLmb05-QDM6ga1Qi9Cem96ZsYXnVNghVEIdCQgfUvOdpqRblEFqE6GAAE6oiioyAPFZ9RBvD6VL4-P4AqEg1S7EgGeoeIA */
    initial: "loading todos",
    // schema: {
    //   events: {} as
    //     | { type: "Todos loaded"; todo: String[] }
    //     | { type: "Loading todos failed"; errorMessage: String },
    // },
    tstypes: {},
    states: {
      "loading todos": {
        on: {
          "Todos loaded": {
            target: "todos Loaded",
            actions: "logFun",
          },
          "Loading todos failed": {
            target: "Loading todos errored",
          },
        },
      },
      "todos Loaded": {
        type: "final",
      },
      "Loading todos errored": {
        type: "final",
      },
    },
  },
  {
    actions: {
      logFun: (context, events) => alert(JSON.stringify(events)),
    },
  }
);
