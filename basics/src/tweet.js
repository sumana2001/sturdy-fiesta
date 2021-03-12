import React from "react";
import './App.css';

function tweet(props) {
  return (
    <div className="tweet">
      <h3>{props.name}</h3>
      <p>{props.message}</p>
      <h3>Likes: {props.likes}</h3>
    </div>
  );
}

export default tweet;
