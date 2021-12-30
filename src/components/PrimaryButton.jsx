import React from "react";

export default function PrimaryButton({ handleClick, children }) {
  return (
    <button onClick={handleClick} className="primary-button">
      {children}
    </button>
  );
}
