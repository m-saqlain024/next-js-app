const { createMachine } = require("xstate");

export const feedbackMachine = createMachine({
  initial: "question",
  states: {
    question:{
        on:{
             'feedback.good':{
                target:"thanks"
             }
        }
    },
    thanks:{}
  },
});