import React from "react";
// import logo from "./logo.svg";
// import './App.css';
import Welcome from "./components/Demo01";
import Comment from './components/Comment'

function App() {

  const comment = {
    date: new Date(),
    text: 'I hope you enjoy learning React!',
    author: {
      name: 'Hello Kitty',
      avatarUrl: 'https://placekitten.com/g/64/64',
    },
  };

  return (
    <div className="App">
      <Welcome name="ygj" />
      <Welcome name="Sara" /> <Welcome name="Cahal" /> <Welcome name="Edite" />
      <Comment
        date={comment.date}
        text={comment.text}
        author={comment.author}
      />
    </div>
  );
}

export default App;
