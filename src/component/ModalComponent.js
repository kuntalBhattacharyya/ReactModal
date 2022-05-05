import React, { useState } from "react";
import ReactModal from "./ReactModal";

function ModalComponent() {
  const [show, setShow] = useState(false);
  return (
    <>
      <button onClick={() => setShow(true)}>Open the Box!</button>
      <button onClick={() => setShow(false)}>Close the Box!</button>
      {show ? <ReactModal></ReactModal> : null}
    </>
  );
}

export default ModalComponent;
