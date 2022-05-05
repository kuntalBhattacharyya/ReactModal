import React from "react";

function EmployeeChild({ Name1, Project1 }) {
  console.log(Name1)
  return (
    <div>
      <h2> Hey, My name is {Name1}</h2>
      <h3>I am working on {Project1} Project </h3>
    </div>
  );
}

export default EmployeeChild;
