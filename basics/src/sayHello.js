//basics1
import React from "react";

function hello() {
  const sayHello = () => {
    console.log("Hello");
  };
  return (
    <div>
      <button onClick={sayHello}>Hi</button>
    </div>
  );
}
export default hello;
