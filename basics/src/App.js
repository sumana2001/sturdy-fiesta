import React, { useState } from "react";
import tweet from "./tweet";
//import Hello from './sayHello'; basics1
import Tweet from "./tweet";

function App() {
  /*const [isRed, setRed] = useState(false);
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };
  const red = () => {
    setRed(!isRed);
  }; basics3 */

  const [users,setUsers] = useState([
    { name:"Rachel" ,likes:"50,000" ,message:"It's like all my life everyone's told me, You're a shoe! You're a shoe! You're a shoe!"},
    { name:"Monica" ,likes:"48,240" ,message:"I needed a plan, a plan to get over my man. And what's the opposite of man? Jam."},
    { name:"Joey" ,likes:"62,254" ,message:"If he doesn’t like you, this is all a moo point. It’s like a cow’s opinion. It just doesn’t matter. It’s moo."},
    { name:"Chandler" ,likes:"69,746" ,message:"I'm not great at the advice. Can I interest you in a sarcastic comment?"}
  ])

  return (
    <div className="app">
      {/*<Hello/> basics1*/}

      {/*<Tweet name="Rachel" likes="50,000" message="It's like all my life everyone's told me, You're a shoe! You're a shoe! You're a shoe!"/>
      <Tweet name="Monica" likes="48,240" message="I needed a plan, a plan to get over my man. And what's the opposite of man? Jam."/>
      <Tweet name="Joey" likes="62,254" message="If he doesn’t like you, this is all a moo point. It’s like a cow’s opinion. It just doesn’t matter. It’s moo."/>
      <Tweet name="Chandler" likes="69,746" message="I'm not great at the advice. Can I interest you in a sarcastic comment?"/> basics2*/}

      {/*<button onClick={increment}>Increment</button>
      <h1>{count}</h1>
      <button onClick={red}>Change Colour</button>
      <h1 className={isRed? "red": ""}>RED RED RED!!</h1> basics3*/}
      {users.map(user =>(
        <Tweet name={user.name} message={user.message} likes={user.likes}/>
      ))}
    </div>

  );
}
export default App;
