import React, { useState, useEffect } from 'react';
import './App.css';


function App() {
  
  const [currentNumber, setCurrentNumber] = useState("");
  const [operation, setOperation] = useState("");
  const [firstNumber, setFirstNumber] = useState("")

  const [theme, setTheme] = useState(1);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme % 3) + 1) 
  };

  const handleReset = () => {
    setCurrentNumber("");
    setOperation("");
    setFirstNumber("");
  };

  const handleNumberClick = (number) => {
    const newNumber = currentNumber + number;
    setCurrentNumber(newNumber);
  };

  const handleOperationClick = (op) => {
    if (currentNumber !== "") {
      if (op === "+") {
        setFirstNumber(parseFloat(currentNumber))
        setCurrentNumber("")
        setOperation("+")
      }
      if (op === "-") {
        setFirstNumber(parseFloat(currentNumber))
        setCurrentNumber("")
        setOperation("-")
      }
      if (op === "/") {
        setFirstNumber(parseFloat(currentNumber))
        setCurrentNumber("")
        setOperation("/")
      }
      if (op === "*") {
        setFirstNumber(parseFloat(currentNumber))
        setCurrentNumber("")
        setOperation("*")
      }
    }
  };

  const handleEqualsClick = () => {
    if (operation === "+") {
      setCurrentNumber(firstNumber + parseFloat(currentNumber))
      setOperation("")
      setFirstNumber("")
    }
    if (operation === "-") {
      setCurrentNumber(firstNumber - parseFloat(currentNumber))
      setOperation("")
      setFirstNumber("")
    }
    if (operation === "/") {
      setCurrentNumber(firstNumber / parseFloat(currentNumber))
      setOperation("")
      setFirstNumber("")
    }
    if (operation === "*") {
      setCurrentNumber(firstNumber * parseFloat(currentNumber))
      setOperation("")
      setFirstNumber("")
    }
  }

  const handleDelete = () => {
    const string = currentNumber.toString()
    const newNumber = string.slice(0, -1)
    setCurrentNumber(newNumber)
  }


  return (
    <div className={`App theme-${theme}`}>

        <div className="content">

        <div className={`title theme-${theme}`}>
          
          <h3>Calculator</h3>
          
          <div className={`theme theme-${theme}`}>
            <h4>THEME</h4>
            
            <button onClick={toggleTheme}>
              <div className={`circle position-${theme}`}></div>
            </button>
            
          </div>

        </div>

        <div className={`result theme-${theme}`}>

          <h2>

            {firstNumber === "" ? firstNumber : firstNumber} {operation === '' ? operation : operation} {currentNumber !== '' ? currentNumber : '0'}
          
          </h2>

        </div>

        <div className={`buttons theme-${theme}`}>

          <div className="row">
            <button onClick={() => handleNumberClick('7')}>7</button>
            <button onClick={() => handleNumberClick('8')}>8</button>
            <button onClick={() => handleNumberClick('9')}>9</button>
            <button onClick={handleDelete}>DEL</button>
          </div>
          <div className="row">
            <button onClick={() => handleNumberClick('4')}>4</button>
            <button onClick={() => handleNumberClick('5')}>5</button>
            <button onClick={() => handleNumberClick('6')}>6</button>
            <button onClick={() => handleOperationClick('+')}>+</button>
          </div>
          <div className="row">
            <button onClick={() => handleNumberClick('1')}>1</button>
            <button onClick={() => handleNumberClick('2')}>2</button>
            <button onClick={() => handleNumberClick('3')}>3</button>
            <button onClick={() => handleOperationClick('-')}>-</button>
          </div>
          <div className="row">
            <button onClick={() => handleNumberClick('.')}>.</button>
            <button onClick={() => handleNumberClick('0')}>0</button>
            <button onClick={() => handleOperationClick('/')}>/</button>
            <button onClick={() => handleOperationClick('*')}>x</button>
          </div>
          <div className="row">
            <button onClick={handleReset}>RESET</button>
            <button onClick={handleEqualsClick}>=</button> 
          </div>

        </div>

      </div>

    </div>
  );
}

export default App;
