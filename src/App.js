import React from "react";
import "./App.css";
import useModal from "./Hooks/useModal";

function App() {
  const { Modal, isShow, show, hide, toggle } = useModal({
    //showClose: false,
    clickOutsideToHide: true,
    escToHide: true,
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
      <Modal>Hello World!!</Modal>
    </div>
  );
}

export default App;
