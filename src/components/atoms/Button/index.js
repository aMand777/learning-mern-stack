import React from "react";
import "./button.scss";

export const Button = ({ title, ...rest }) => {
  return (
    <button className='button' {...rest}>
      {title}
    </button>
  );
};

export const ButtonUpdate = ({ title, ...rest }) => {
  return (
    <button className='button-update' {...rest}>
      {title}
    </button>
  );
};

export const ButtonDelete = ({ title, ...rest }) => {
  return (
    <button className='button-delete' {...rest}>
      {title}
    </button>
  );
};

// export default Button;
