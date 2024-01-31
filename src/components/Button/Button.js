import React from "react";
import style from "./Button.module.css";

const variants = {
  primary: style.Primary,
  secondary: style.Secondary,
  danger: style.Danger,
  success: style.Success,
};

const Button = ({ variant, ...props }) => {
  const variantClass = variants[variant] || variants.primary;


  return (
    <button className={[variantClass, style.Button].join(" ")} {...props}>
      {props.children}
    </button>
  );
};

export default Button;
