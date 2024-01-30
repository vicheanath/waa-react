import React from "react";
import "./Button.css";
const Button = ({ variant, ...props }) => {
  return (
    <button className={"Button"} {...props}>
      {props.children}
    </button>
  );
};

export default Button;
