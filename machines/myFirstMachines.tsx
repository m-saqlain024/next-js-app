import { createMachine } from "xstate";

export const myMachine = createMachine({
  /** @xstate-layout N4IgpgJg5mDOIC5QAoC2BDAxgCwJYDswBKAOgAd0BrXWAF3XwGIBZAewFdYwAJVgNzAAnANoAGALqJQZVrFy1crfFJAAPRAEYAbBoA0IAJ6aATAE4SxgKwBfa-rRY8hUgQi50LDlwDy7WmMkkEBk5BSUVdQQAFlEADhIAZg0rfSMEWI0SG1t9fFYIOBUHHAJiFRD5RWUgyIBaLVTEepyQYqdicioaemrpWUrwmsQo40aEZPMAdmz7DBLnEld3cv6w3rVhjUss4wSohOmxjQPbWyA */
  initial: "notHovered",
  states: {
    notHovered: {
      on: {
        MouseHover: {
          target: "Hovered",
        },
      },
    },
    Hovered: {
      on: {
        MouseOut: {
          target: "notHovered",
        },
      },
    },
  },
});
