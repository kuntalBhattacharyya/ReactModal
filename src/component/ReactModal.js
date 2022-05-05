import React, {useState} from "react";
import Modal from "react-modal";

export default function ReactModal() {
  return (
    <div>
    <Modal isOpen={true}>
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </Modal>
    </div>
  );
}
