import React, { useState } from 'react';
import './Buttons.css';
import Screen from './Screen';

const Buttons = () => {
  const [currentValue, setCurrentValue] = useState('');
  const [numbersArray, setNumbersArray] = useState([]);

  const handleButtonClick = (event) => {
    const buttonText = event.target.innerText;
    if (buttonText === '=') {
      if (numbersArray.length > 0){
      let res = eval(currentValue)
      let resString = res.toString()
      setCurrentValue(resString)
      setNumbersArray(resString.split(''))
    }
    }
    else if (buttonText === 'Ce') {
      setCurrentValue(currentValue.slice(0, -1));
      setNumbersArray(numbersArray.slice(0, -1));
    } else if (!isNaN(parseFloat(buttonText)) || buttonText === '.') {
      if (currentValue.length < 12) {
        setCurrentValue(prevValue => prevValue + buttonText);
        if (!isNaN(parseFloat(buttonText))) {
          setNumbersArray(prevArray => [...prevArray, buttonText]);
        }
      }
    } else if (['+', '-', '×', '÷'].includes(buttonText)) {
      if (numbersArray.length === 0 || !['+', '-', '×', '÷'].includes(numbersArray[numbersArray.length - 1])) {
        if (currentValue.length < 14) {
          setCurrentValue(prevValue => prevValue + buttonText);
          setNumbersArray(prevArray => [...prevArray, buttonText]);
        }
      }
    }
  };

  return (
    <div>
      <Screen>{currentValue}</Screen>
      <div className="buttons">
        <button className="button" onClick={handleButtonClick}>7</button>
        <button className="button" onClick={handleButtonClick}>8</button>
        <button className="button" onClick={handleButtonClick}>9</button>
        <button className="button operator" onClick={handleButtonClick}>÷</button>
        <button className="button" onClick={handleButtonClick}>4</button>
        <button className="button" onClick={handleButtonClick}>5</button>
        <button className="button" onClick={handleButtonClick}>6</button>
        <button className="button operator" onClick={handleButtonClick}>×</button>
        <button className="button" onClick={handleButtonClick}>1</button>
        <button className="button" onClick={handleButtonClick}>2</button>
        <button className="button" onClick={handleButtonClick}>3</button>
        <button className="button operator" onClick={handleButtonClick}>-</button>
        <button className="button equal" onClick={handleButtonClick}>=</button>
        <button className="button clear" onClick={handleButtonClick}>Ce</button>
        <button className="button" onClick={handleButtonClick}>0</button>
        <button className="button operator" onClick={handleButtonClick}>+</button>
      </div>
    </div>
  );
};

export default Buttons;
