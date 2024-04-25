import React from 'react';
import './Buttons.css';

const Buttons = () => {
  const handleButtonClick = (event) => {
    const buttonText = event.target.innerText;
    console.log(buttonText);
  };

  return (
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
  );
};

export default Buttons;
