import React, {useState, useEffect} from 'react';

const Clicker = () => {
  const [counter, setCounter] = useState(0);

  const handleClick = event => {
    try {
      switch(event.target.id) {
        case "increaseBtn":
          setCounter(counter + 1);
          let graphic = document.createElement('img');
          graphic.src = "./green-checkmark.jpg";
          graphic.style.width = "100px";
          document.querySelector('.graphics').appendChild(graphic); 
          break;
        case "decreaseBtn":
          if (counter > 0) {
            setCounter(counter - 1);
            document.querySelector('.graphics').lastChild.remove();
          } else {
            alert("Can't set counter lower than 0");
          }; 
          break
        case "resetBtn":
          setCounter(0);
          document.querySelector('.graphics').outerHTML = "";
          break;
      }
    } catch(error) {
        alert("Error: " + error.message);
    };
  };

  return (
    <div className="counter">
      <h2>{counter}</h2>
      <button id="increaseBtn" onClick={event => handleClick(event)}>Increase</button>
      <button id="decreaseBtn" onClick={event => handleClick(event)}>Decrease</button>
      <button id="resetBtn" onClick={event => handleClick(event)}>Reset Counter</button>
      <div class="graphics"></div>
    </div>
  );
};

export default Clicker;