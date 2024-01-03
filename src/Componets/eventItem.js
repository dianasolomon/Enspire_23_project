import React from "react";
import "../styles/eventItem.css"
function EventItem({ image, name, price }) {
  const btnstyle = {
    padding: '10px 20px',
    fontSize: '16px',
    fontWeight: 'bold',
    backgroundColor: '#4CAF50', // Background color
    color: '#fff', // Text color
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  };
  return (
    <div className="eventItem">
      <div style={{ backgroundImage: `url(${image})` }}> </div>
      <h1 id="heading"> {name} </h1>
      <div className="buttonContainer">
      <button style={btnstyle}>Register</button>
      </div>
        
    </div>
  );
}

export default EventItem;