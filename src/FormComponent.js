import React, { useState } from "react";

const Application = () => {
  const [name, setName] = useState("");
  const [nameValidate, setNameValidate] = useState(true);

  const nameChange = (e) => {
    setName(e.target.value);
  };
  const submitForm = (e) => {
    e.preventDefault();
    if (name === "") {
      // alert("please enter the name");
      setNameValidate(false);
    } else {
      setNameValidate(true);
    }
  };
  const inputHandler =  () =>{
    if (name === "") {
        // alert("please enter the name");
        setNameValidate(false);
      } else {
        setNameValidate(true);
      }
  }

  return (
    <form onSubmit={submitForm}>
      <div>
        <label>Your Name:</label>
        <input type="text" id="name" onChange={nameChange} onBlur={inputHandler}/>
      </div>
      <p>{!nameValidate && "please enter the valid name"} </p>
      <div>
        <button>Submit</button>
      </div>
    </form>
  );
};

export default Application;
