import React from "react";

function ChildCompoent(props) {
  const onTrigger = (event) => {
    props.parentCallback(event.target.myname.value);
    console.log(event.target.myname.value)
    event.preventDefault();
  };
  return (
    <div>
      <form onSubmit={onTrigger}>
      <input type="text"  id = "myname" placeholder="Enter Name" />
      <br></br>
      <br></br>
      <button > Submit </button>
      </form>
    </div>
  );
}

export default ChildCompoent;
