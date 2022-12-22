import React from "react";

const TextIcon = ({Icon, text}) => {
  return (
    <p className="__font-large __roboto-font-300 d-flex align-items-center">
      <span className="m-2">{Icon}</span>
      {text}
    </p>
  )
}

export default TextIcon;