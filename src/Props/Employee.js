import React from "react";
import EmployeeChild from "./EmployeeChild";

function Employee(props) {
  const { Name, Project } = props;
  console.log(Name)
  return (
    <div>
      {/* Psssing props to nested child component */}
      <EmployeeChild Name1={Name} Project1={Project}></EmployeeChild>
    </div>
  );
}

export default Employee;
