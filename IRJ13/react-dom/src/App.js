import React, { useState } from "react";

function App() {
  const [title, setTitle] = useState("Original Title");
  const [updateCount, setUpdateCount] = useState(0);

  const handleChangeTitle = () => {
    setTitle("Updated by React");
    setUpdateCount(prev => prev + 1);
  };

  return (
    <div>
      <h1>{title}</h1>
      <button onClick={handleChangeTitle}>Change Title (React)</button>
      <p>DOM Updates: {updateCount}</p>
    </div>
  );
}

export default App;
