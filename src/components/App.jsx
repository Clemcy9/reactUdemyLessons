import React, { useState } from "react";

function App() {
  [fullName, setFullName] = useState({
    fName: "",
    lName: ""
  });
  function handlechange(e) {
    const firstName = e.target.value;
  }

  return (
    <div className="container">
      <h1>Hello{fName}</h1>
      <form>
        <input
          onChange={handlechange}
          value={fName}
          type="text"
          placeholder="First Name"
        />
        <input
          onChange={handlechange}
          value={lName}
          type="text"
          placeholder="Last Name"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
