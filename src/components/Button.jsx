import React from "react";

const Button = ({ name, bgcolor, func }) => {
  return (
    <button onClick={func} style={{ background: bgcolor }}>
      {name}
    </button>
  );
};

export default Button;
