import React from "react";
import "./input.scss";

const Input = ({ label, ...rest }) => {
  return (
    <div className='input-wrapper'>
      <p className='label'>{label}</p>
      <input className='input' type='text' placeholder=' Create here..' {...rest} />
    </div>
  );
};

export default Input;
