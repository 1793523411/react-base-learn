import React from "react";
// import logo from "./logo.svg";
// import './App.css';
import Welcome from "./components/Demo01";
import Comment from "./components/Comment";
import Tick from "./components/Tick";
import {ActionLink,Toggle} from "./components/Event";

function App() {
  const comment = {
    date: new Date(),
    text: "I hope you enjoy learning React!",
    author: {
      name: "Hello Kitty",
      avatarUrl: "https://placekitten.com/g/64/64",
    },
  };

  return (
    <div className="App">
      <ActionLink />
      <Toggle/>
      <Welcome name="ygj" />
      <Welcome name="Sara" /> <Welcome name="Cahal" /> <Welcome name="Edite" />
      <Comment
        date={comment.date}
        text={comment.text}
        author={comment.author}
      />
      <Tick />
      <Tick />
      <Tick />
    </div>
  );
}

export default App;
