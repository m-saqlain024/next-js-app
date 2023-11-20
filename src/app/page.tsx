// import UseEffect from "@/component/reactHooks/UseEffect";
import React from "react";
import UseState from "@/component/reactHooks/useState";
import Firstmachine from "../component/machine/Firstmachine"
function page() {
  return (
    <div>
      <UseState/>
      {/* <UseEffect /> */}

      <Firstmachine/>
    </div>
  );
}

export default page;
