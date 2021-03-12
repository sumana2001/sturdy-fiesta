import React from 'react';

function App(){

  const sayHello = ()=>{
    console.log('Hello');
  }
  return(
    <div>
      <h1>Hello World</h1>
      <button onClick={sayHello}>Hi</button>
    </div>
  )
};
export default App;