import { type } from "os";
import { createMachine } from "xstate";

export const todosApp = createMachine({
  /** @xstate-layout N4IgpgJg5mDOIC5QDoCWA7ALqghpsAxADYD2OEGUABJiRCbANoAMAuoqAA4OrYnocQAD0QBaAIwAWScikAOSQGYA7AFYANCACeiAGyKAvgc3IwAJzMkzBc5bM06DFuyQhusXqn6CRCcVOQ5VXFVXQAmDW0xANUjE1srAgBRADcwLCpxZ0F3T29XX1Ew8VlJBRVInQQAThKIo2MQdDo4QRyePgEC6Oqw0vK1TSqJZhLmcfHVMOY5XVUgyTiQNCxcfHaPTp8eocRmZFjG0wsrDbyu0F8pXUDg0IjdmrrDk3QwAHcqWEw8MEyzrbdPyKfZBELhSqIEKKZBqBoGIA */
  initial: "loading todos",
  states: {
    "loading todos": {
      on: {
        "todos loaded": {
          target: "todos loaded",
        },
        "loading todos failed": {
          target: "loading todos errored",
        },
      },
    },
    "todos loaded": {},
    "loading todos errored": {},
  },
});