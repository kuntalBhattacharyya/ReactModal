import React, { useState } from "react";

const InputText = () => {
  const [name, setName] = useState("");
  const aleretBox = () => {
    alert(`hi my name is ${name}`);
  };
  const nameChange = (e) => {
    if (e.target.value.length < 6) {
      setName(e.target.value);
    } else {
      alert("please enter properly");
    }
  };
  return (
    <div>
      <input value={name} onChange={nameChange}></input>
      <br />
      <button onClick={aleretBox}>Click the button</button>
    </div>
  );
};
export default InputText;
