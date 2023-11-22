import { createMachine, assign } from "xstate";

export  const countMachine = createMachine({
    id: "countMachine",
  /** @xstate-layout N4IgpgJg5mDOIC5QGMD2BXAdgFwLIENkALAS0zAGIBJAOQGEBtABgF1FQAHVWE7E1TOxAAPRAEYALBIA0IAJ6IAtAGYAnAF91stFjyFS5CgBEAoo1ZCuPPgKGiEigGxNZChwCZPm7RhwFiZJQAyiYAKsxsSCBWvPyCUfaKYgDsjq5KABximlogmKgQcEI6fvqBltyxtglKyjLySsmqAHQArEwdrRKOye7JykzKOepAA */
  context: {
    count: 0,
  },

  on: {
    INC: {
      actions: assign({
        count: ({ context }) => context.count + 1,
      }),
    },
    DEC: {
      actions: assign({
        count: ({ context }) => context.count - 1,
      }),
    },
    SET: {
      actions: assign({
        count: ({ event }) => event.value,
      }),
    },
  },

});