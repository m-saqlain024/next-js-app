// import UseEffect from "@/component/reactHooks/UseEffect";
import React from "react";
import UseState from "@/component/reactHooks/useState";
import Firstmachine from "../component/machine/Firstmachine";
import UseStateClass from "../component/reactHooks/useStateClass";
import UseEffect from "@/component/reactHooks/UseEffect";
function page() {
  return (
    <div>
      <UseState />
      {/* <UseEffect /> */}

      <UseStateClass />
      <Firstmachine />

      <UseEffect />
    </div>
  );
}

export default page;
