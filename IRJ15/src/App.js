import React, { useState } from "react";

function App() {
  const [activePage, setActivePage] = useState("Home");

  const renderContent = () => {
    switch (activePage) {
      case "Home":
        return <h2 style={{ color: "green" }}>Welcome to Home</h2>;
      case "About":
        return <h2 style={{ color: "blue" }}>About Us</h2>;
      case "Contact":
        return <h2 style={{ color: "purple" }}>Contact Us</h2>;
      default:
        return null;
    }
  };

  const navStyle = { padding: "10px", margin: "5px", cursor: "pointer", fontWeight: "bold" };

  return (
    <div>
      <nav>
        <span style={navStyle} onClick={() => setActivePage("Home")}>Home</span>
        <span style={navStyle} onClick={() => setActivePage("About")}>About</span>
        <span style={navStyle} onClick={() => setActivePage("Contact")}>Contact</span>
      </nav>
      <div style={{ marginTop: "20px" }}>
        {renderContent()}
      </div>
    </div>
  );
}

export default App;
