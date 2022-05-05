import React, { useState, useEffect } from "react";
import ChildCompoent from "./component/ChildCompoent";

function App() {
  const [name, setName] = useState("");

  const handleCallback = (data) =>{
    setName(data)
  }

  useEffect(() =>{
    console.log("New Modal");
  })

  return (
    <div>
      <ChildCompoent parentCallback={handleCallback} />
      {name}
    </div>
  );
}

export default App;
