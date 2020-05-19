import React from "react";
import "./App.css";
import usePortal from "./Hooks/usePortal";

function App() {
  const { Portal, isShow, show, hide, toggle } = usePortal({
    defaultShow: false,
    onShow: () => {
      console.log("Show");
    },
    onHide: () => {
      console.log("Hide");
    },
  });
  return (
    <div className="App">
      <button onClick={show}>Show</button>
      <button onClick={hide}>Hide</button>
      <button onClick={toggle}>Toogle</button>
      <p>Status => {isShow.toString()}</p>
      <hr />
      <Portal>Hello World!!</Portal>
    </div>
  );
}

export default App;
