import React from "react";
import Radium from 'radium';
import "./Car.css";
const Car=(props) => {
  const inputClasses = ["input"];

  if (props.name !== "") {
    inputClasses.push("green");
  } else {
    inputClasses.push("red");
  }
  if (props.name.length > 4) {
    inputClasses.push("bold");
  }
  const style = {
    boxShadow: "0 4px 5px 0 rgba(0, 0, 0, 0.25)",
    border: "1px solid #ccc",
    ':hover':{
      border:'1px solid #aaa',
      boxShadow:'0 4px 15px 0 rgba(0,0,0,0.25)'}
  };
  return (
    <div className="Car" style={style}>
      <h2>Car name:{props.name}</h2>
      <p>
        Year:<strong>{props.year}</strong>
      </p>

      <input
        className={inputClasses.join(" ")}
        type="text"
        onChange={props.onChangeName}
        value={props.name}
      ></input>

      <button onClick={props.onDelete}>delete</button>
    </div>
  );
};
export default Radium(Car)
