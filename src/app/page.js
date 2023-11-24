"use client";
import { useMachine } from "@xstate/react";
import React, { useState } from "react";
import { createMachine } from "xstate";
function page() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [state, send] = useMachine(lightMachine);

  console.log(lightMachine.initialState);
  const machinecan = lightMachine.getInitialState;
  console.log(machinecan, "log machine can");
// let arr = ["I", "go", "home"];
// arr.splice( deleteCount, elem1)
  return <div>hello world</div>;
}

export default page;

const lightMachine = createMachine(
  {
    /** @xstate-layout N4IgpgJg5mDOIC5QBsCWUAWAXAdFATmGAHYDEAtgPYCusYA2gAwC6ioADpbKlqpcWxAAPRAHYAnDlEAOcYwBsAJgCsAGhABPRAEZx2gL6H1xShDiC0mLIM7de-QSIQBabfIAs6rS91GQl7DxCEhsuHj4BJGFEVzcvRHlpHGU-ANxiMAB3AAJYLABDLDBs7VC7CMcY7WqcbRV4hBUUw30gA */
    id: "light",
    initial: "green",
    states: {
      green: {
        // action referenced via string
        entry: "alertGreen",

        on: {
          mouse: "new state 1"
        }
      },

      "new state 1": {}
    },
  },
  {
    actions: {
      // action implementation
      alertGreen: (context, event) => {
        alert("Green!");
      },  
    },
    delays: {
      /* ... */
    },
    guards: {
      /* ... */
    },
    services: {
      /* ... */
    },
  }
);
