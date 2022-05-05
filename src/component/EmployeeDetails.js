import React from "react";

function EmployeeDetails() {
  const details = [
    {
      name: "Kuntal",
      id: 1,
      age: 28,
    },
    {
      name: "Chiku",
      id: 2,
      age: 25,
    },
    {
      name: "Smith",
      id: 3,
      age: 27,
    },
  ];

  return (
    <div>
      {details.map((value) => {
        return (
            <div>
        <h1>my name is {value.name}</h1>
        <h2>my age is {value.age}</h2>
        </div>)
      })}
    </div>
  );
}

export default EmployeeDetails;
