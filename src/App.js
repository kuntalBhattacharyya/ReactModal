import React, { useState } from "react";
import ChildCompoent from "./component/ChildCompoent";

function App() {
  const [name, setName] = useState("");

  const handleCallback = (data) =>{
    console.log(data)
    setName(data)
  }

  return (
    <div>
      <ChildCompoent parentCallback={handleCallback} />
      {name}
    </div>
  );
}

export default App;
