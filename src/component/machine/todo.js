// "use client";
// import React, { useEffect, useState } from "react";
// import { createMachine, assign, interpret } from "xstate";

import { createMachine } from "xstate";
import { boolean } from "zod";

// // Define the state machine
// const todoMachine = createMachine({
//   id: "todo",
//   initial: "idle",
//   context: {
//     newTodo: "",
//     todos: [],
//   },
//   states: {
//     idle: {
//       on: {
//         UPDATE_NEW_TODO: {
//           actions: assign({
//             newTodo: (_, event) => event.value,
//           }),
//         },
//         ADD: {
//           actions: assign({
//             todos: (context) => [...context.todos, context.newTodo],
//             newTodo: "",
//           }),
//         },
//       },
//     },
//   },
// });

// const todoService = interpret(todoMachine).start();

// function Todoapp() {
//   const [state, setState] = useState(todoMachine.initialState);

//   useEffect(() => {
//     const subscription = todoService.subscribe(setState);

//     return () => {
//       subscription.unsubscribe();
//     };
//   }, []);

//   const { newTodo, todos } = state.context;

//   return (
//     <div className="max-w-md mx-auto mt-8 p-4 bg-gray-100 rounded shadow-md">
//       <h1 className="text-2xl font-bold mb-4">Todo App</h1>
//       <div className="flex items-center space-x-2">
//         <input
//           type="text"
//           value={newTodo}
//           onChange={(e) =>
//             todoService.send({ type: "UPDATE_NEW_TODO", value: e.target.value })
//           }
//           className="border rounded py-2 px-4 w-2/3"
//         />
//         <button
//           onClick={() => todoService.send({ type: "ADD" })}
//           className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
//         >
//           Add Todo
//         </button>
//       </div>
//       <ul className="list-disc mt-4">
//         {todos.map((todo, index) => (
//           <li key={index} className="mb-2">
//             {todo}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default Todoapp;




const machiening = createMachine({
  initial: "green",
  context: {
    boll : boolean
  },
  states: {
    green: {},
    red: {},
    blue: {},
  },
});

const extendConfig = machiening.withContext({
    ...machiening.context,
    name :"",
    arra :[]
})


const extendConfig2 = machiening.withConfig({
    action : ((contex , event)=>{
        console.log("green")
    })
})


const { currentstate } = machiening;
console.log(currentstate.nextEvent)