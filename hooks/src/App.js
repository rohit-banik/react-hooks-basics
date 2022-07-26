import "./App.css";
import { createContext, useContext, useEffect, useState } from "react";

function App() {
  const [age, setAge] = useState(21);
  const [siblingsNum, setSiblingsNum] = useState(3);

  const handleClick = () => setAge(age + 1);
  const handleSiblingsNum = () => setSiblingsNum(siblingsNum + 1);

  const [state, setState] = useState({ objage: 19, objsibling: 6 });
  const handleObjectState = (val) =>
    setState({
      ...state,
      [val]: state[val] + 1,
    });
  const { objage, objsibling } = state;

  const [count, setCount] = useState(0);

    const [ageOnTitle, setAgeTitle] = useState(3);
    const handleTitleClick = () => setAgeTitle(ageOnTitle+1);

    useEffect(() => {
      document.title = 'You are ' + ageOnTitle + ' years old!';
    })

    const ThemeContext = createContext('light');
    const ColorContext = createContext('white');

    const theme = useContext(ThemeContext);
    const color = useContext(ColorContext);

  return (
    <div className="App">
      
      <div>
        <h1>Progression 1: useState & Progression 2: Multiple State</h1>
        <p>Today I am {age} Years of Age</p>
        <span>I have {siblingsNum} siblings</span>
        <div>
          <button onClick={handleClick}>Get Older!</button>
          <button onClick={handleSiblingsNum}>More siblings!</button>
        </div>
      </div>
      
      <div>
        <h1>Progression 3: Object State</h1>
        <p>Today I am {objage} Years of Age</p>
        <span>I have {objsibling} siblings</span>
        <div>
          <button onClick={handleObjectState.bind(null, "objage")}>
            Get Older!
          </button>
          <button onClick={handleObjectState.bind(null, "objsibling")}>
            More siblings!
          </button>
        </div>
      </div>
      
      <div>
        <h1>Progression 4: Initialize state from function</h1>
        <p>Count value is: {count}</p>
        <button onClick={() => setCount(0)}>Reset</button>
        <button onClick={() => setCount((prev) => (prev += 1))}>Plus(+)</button>
        <button onClick={() => setCount((prev) => (prev -= 1))}>
          Minus(-)
        </button>
      </div>

      <div>
        <h1>Progression 5: useEffect</h1>
        <p>Look at the thitle of the current tab in your browser</p>
        <button onClick={handleTitleClick}>Update Title!</button>
      </div>
      
      <div>
        <h1>Progression 6: useContext</h1>
        <div className="context">Theme Context: {theme}</div>
        <div className="context">Color Context: {color}</div>
      </div>

    </div>
  );
}

export default App;
