// import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
import MoodDisplay from './MoodDisplay';

function App() {
  const [mood,SetMood]=useState("");
  // const [color,SetColor]=useState("");
  return (

    <div className={`container ${mood}`}>
    <h1>Whats your Mood?</h1>
    <div className="buttons">
      <button onClick={()=>SetMood("happy")}>Happy😁</button>
      <button onClick={()=>SetMood("sad")}>Sad😢</button>
      <button onClick={()=>SetMood("good")}>Good👍</button>
      <button onClick={()=>SetMood("depressed")}>Depressed 💔</button>
    </div>
    <MoodDisplay temp={mood}/>
    </div>
  );
}

export default App;
