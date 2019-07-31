import React from "react";

const Button = ({ size, type, call, action }) => {
  
  if (type === "secondary") {
    type = "outline-dark";
  } else if (type === "tertiary") {
    type = "outline-light";
  }

  return (
    <button
      href={action}
      className={`btn btn-${size} btn-${type} text-uppercase`}
    >
      {call}
    </button>
  );
};
export default Button;