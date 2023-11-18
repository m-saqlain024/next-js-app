import { assign, createMachine } from "xstate";

export const secondMachine = createMachine({
  id: "toggle",
  context: { count: 0 },
  initial: "Inactive",
  states: {
    Inactive: {
      on: { toggle: "Active" },
    },
    Active: {
      entry: assign({ count: ({ context }) => context.count + 1 }),
      on: { toggle: "Inactive" },
      after: { 2000: "Inactive" },
    },
  },
});
