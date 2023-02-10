import React from "react";
import "./textArea.scss";

const TextArea = ({ ...rest }) => {
  return (
    <div>
      <textarea className='text-area' name='post' id='post' {...rest}></textarea>
    </div>
  );
};

export default TextArea;
