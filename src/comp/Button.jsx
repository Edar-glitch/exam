import React from "react";

function Button({ className, onClick, title, ...props }) {
  return (
    <div>
      <button className={className} onClick={onClick} {...props}>
        {title}
      </button>
    </div>
  );
}

export default Button;