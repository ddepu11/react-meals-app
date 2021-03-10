import React from "react";

export default function Categories({ text, handleClick }) {
  return <button onClick={handleClick}>{text}</button>;
}
