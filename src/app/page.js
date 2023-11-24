"use client";
import { interpret } from "@xstate/react";
import React, { useState } from "react";
import { FetchMachine } from "../component/machine/FetchMachine";
function page() {
  const dataPre = document.getElementById("dataPre");
  const FetchButton = document.getElementById("fetchButton")
  const retryButton = document.getElementById("retryButton");
  const services = interpret(FetchMachine).start();
  services.onTransition((state) => {
    dataPre.innerText = state.context.data
      ? JSON.stringify(state.context.data, null, 2)
      : "";
  });
 FetchButton.addEventListener('click' , ()=>{
  services.send({
    type: "FETCH",
    url: "https://jsonplaceholder.typicode.com/posts",
  });
 })

 retryButton.addEventListener("click" , ()=>{
  services.send({
    type : "RETRY"
  })
 })
  return (
    <>
    <button id="retryButton">Retry </button>
    <button id="fetchButton" > Fetch</button>

      <div id="dataPre">hello world</div>;
    </>
  );
}

export default page;

// const lightMachine = createMachine(
//   {
//     /** @xstate-layout N4IgpgJg5mDOIC5QBsCWUAWAXAdFATmGAHYDEAtgPYCusYA2gAwC6ioADpbKlqpcWxAAPRAHYAnDlEAOcYwBsAJgCsAGhABPRAEZx2gL6H1xShDiC0mLIM7de-QSIQBabfIAs6rS91GQl7DxCEhsuHj4BJGFEVzcvRHlpHGU-ANxiMAB3AAJYLABDLDBs7VC7CMcY7WqcbRV4hBUUw30gA */
//     id: "light",
//     initial: "green",
//     states: {
//       green: {
//         // action referenced via string
//         entry: "alertGreen",

//         on: {
//           mouse: "new state 1"
//         }
//       },

//       "new state 1": {}
//     },
//   },
//   {
//     actions: {
//       // action implementation
//       alertGreen: (context, event) => {
//         alert("Green!");
//       },
//     },
//     delays: {
//       /* ... */
//     },
//     guards: {
//       /* ... */
//     },
//     services: {
//       /* ... */
//     },
//   }
// );
