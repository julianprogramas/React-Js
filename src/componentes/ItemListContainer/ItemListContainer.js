import React from "react";
import "./ItemListContainer.css";

export default function ItemListContainer(greeting) {
  const { message, name } = greeting;
  return (
    <div className="saludo">
      <p>{message}</p>
      <p>Hola {name}</p>
    </div>
  );
}