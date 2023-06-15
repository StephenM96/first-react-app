import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Spidey from "./Spidey";
import Welcome from "./Components/WelcomeScreen/Welcome";
import FullName from "./Components/WelcomeScreen/Name/FullName";
import ComplexComment from "./Components/WelcomeScreen/Comment/ComplexComment";
import Comment from "./Components/WelcomeScreen/Comment/Comment";
import MoviesList from "./Components/WelcomeScreen/Movies/MoviesList";
import MoodChanger from './MoodChanger/MoodChanger'
import Phrases from './Phrases/Phrases'
import Weather from './Components/WelcomeScreen/Weather/Weather'
import LogInForm from "./Components/WelcomeScreen/LogInForm/LogInForm";
import SubmitForm from "./Components/WelcomeScreen/LogInForm/SubmitForm";
import ExplodingBomb from "./Components/WelcomeScreen/ErrorMessage/ExplodingBomb";

function App() {
  // const [count, setCount] = useState(10);
  // const [count2, setCount2] = useState(20);

  // const spiderman = {
  //   name: "Spiderman",
  //   alterEgo: "Peter Parker",
  //   catchPhrase: "With great power comes great responsibility!",
  // };

  // const batman = {
  //   name: "Mr. Man, Bat",
  //   alterEgo: "Bruce Wayne",
  //   catchPhrase: "Eat Bats!",
  // };

  const comment = {
    date: new Date(),
    text: "I hope you enjoy learning React!",
    author: {
      name: "Hello Kitty",
      avatarUrl: "https://placekitten.com/g/300/300",
    },
  };

  return (
    <>
      <div>
        <p>Test</p>
        <Comment
          author={comment.author}
          date={comment.date}
          text={comment.text}
        />
      </div>
      
      <div>     
          <Welcome name="students">
          <p>Child element here!</p>
          <h3>Hey hey hey!</h3>
        </Welcome>
      </div>

      <div>
        <MoviesList />
      </div>

      <div>
        <MoodChanger />
      </div>

      {/* <div>
        <Phrases />
      </div> */}

      <div>
        <Weather />
      </div>

      {/* <div>
        <LogInForm />
      </div> */}

      {/* <div>
        <SubmitForm />
      </div> */}

      <ExplodingBomb />
      

    </>    
  );

  // return (
  //   <>
  //     <div>
  //       <a href="https://vitejs.dev" target="_blank">
  //         <img src={viteLogo} className="logo" alt="Vite logo" />
  //       </a>
  //       <a href="https://react.dev" target="_blank">
  //         <img src={reactLogo} className="logo react" alt="React logo" />
  //       </a>
  //     </div>
  //     <h1>Vite + React</h1>
  //     <div className="card">
  //       <button onClick={() => setCount((count) => count + 1)}>
  //         count is {count}
  //       </button>
  //       <button onClick={() => setCount2((count2) => count2 + 10)}>
  //         count is {count2}
  //       </button>
  //       <p>
  //         Edit <code>src/App.jsx</code> and save to test HMR
  //       </p>
  //     </div>
  //     <p className="read-the-docs">
  //       Click on the Vite and React logos to learn more
  //     </p>
  //     <div>

  //     </div>
  //     <Spidey countHere={count} superhero ={spiderman}/>
  //     <Spidey countHere={count2} superhero={batman} />

  //     <FullName first="Billy" last="Joe" />

  //   </>
  // )
}

export default App;
