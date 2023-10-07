import React from "react";
import { Emp } from "./components/Emp";
import { Myemp } from "./components/Myemp";
import "./components/common.css";
import { Gridpracticrass } from "./components/Gridpracticrass";
import { Color } from "./components/Color";
import { Signin } from "./components/Signin";
import { Login } from "./components/Login";
import { Login1 } from "./components/Login1";

function App() {
  return (
    <div className="main">
      {/* <Gridpracticrass /> */}
      {/* <Color /> */}
      {/* <Signin /> */}
      <Login />
      {/* <Login1 /> */}
    </div>
  );
}

export default App;
