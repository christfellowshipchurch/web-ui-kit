import React from "react"


const Button = ({ size, type, call, action }) => {
  
  if (type === "secondary") {
    type = "outline-dark";
  } else if (type === "tertiary") {
    type = "outline-light";
  }

  return (
    <button
      href={action}
      className={`btn btn-${size} btn-${type} text-uppercase font-weight-bold`}
    >
      {call}
    </button>
  )
}

Button.defaultProps = {
  size: 'lg',
  type: 'primary',
  call: 'default',
  action:'action'
}


export default Button; 