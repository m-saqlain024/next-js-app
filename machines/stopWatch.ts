import { assign, createMachine, fromCallback } from "xstate";

export const stopWatch = createMachine({
  /** @xstate-layout N4IgpgJg5mDOIC5SwC4HsAOB3AhigxgBYDEATnGCgNoAMAuoqBmrAJYqtoB2jIAHogAsAJgA0IAJ6IAjAHZhAOlkBOaQDY1y5cOUBmAKyz9AX2PjUmXAUIKLGDJGKocpavV7M2HbrwEJhagAcCjShoYKBgkaG+rriUv40ggrC+mGCNIG6whnKgabm6Nh4RAqkAK5cXKxcUMQAKgCSAMIA0rQMSCCe7Jw8XX66gcoKw5G6EYJDWtLxiIHSCmlh0pkqgmrqBSB2VqUVVTV1dh0eLL0+A4gBI9kLOoGR0kNzCNKxSss0ujTCwlmyIymMwgLhoCBwXi7EqEM5ePq+RAAWjUrxRITCmUCmlkGkMghMIOh1lsRQcEDhF36oD8710CnealSwl08i0agJr2kyjUCg0GlkNEMujkrMJhUsMLKlWqtUp3mp-EQuiZDNSoTURmkG10cUkMiynzCEwMeWkgUJpiAA */
  id: "stopwatch",
  initial: "stopped",
  context: {
    elapsed: 0,
  },
  states: {
    stopped: {
      on: {
        start: "running",
      },
    },
    running: {
      invoke: {
        src: fromCallback(({ sendBack }) => {
          const interval = setInterval(() => {
            sendBack({ type: "TICK" });
          }, 10);
          return () => clearInterval(interval);
        }),
      },
      on: {
        TICK: {
          actions: assign({
            elapsed: ({ context }) => context.elapsed + 1,
          }),
        },
        stop: "stopped",
      },
    },
  },
  on: {
    reset: {
      actions: assign({
        elapsed: 0,
      }),
      target: ".stopped",
    },
  },
});