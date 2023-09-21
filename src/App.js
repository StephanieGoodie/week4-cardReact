import logo from './logo.svg';
import './App.css';
import { useState } from 'react'; // Import useState from React

function App() {
  const [count, setCount] = useState(0); // Initialize state for the count

  const duplicateCard = () => {
    const clone = document.querySelector('.card').cloneNode(true);
    document.body.appendChild(clone);
  };

  const changeBackgroundColor = () => {
    const card = document.querySelector('.card');
    card.style.backgroundColor = '#' + randomColor();
  };

  const changeHeading = () => {
    const title = document.querySelector('h2');
    title.innerText = 'Super Pod 2 Realty';
  };

  const deleteCard = () => {
    const cards = document.querySelectorAll('.card');
    if (cards.length > 1) {
      const lastCard = cards[cards.length - 1];
      lastCard.parentNode.removeChild(lastCard);
    }
  };

  const toggleDescription = () => {
    const description = document.querySelector('#description');
    if (description.style.display === 'none' || description.style.display === '') {
      description.style.display = 'block';
    } else {
      description.style.display = 'none';
    }
  };

  const randomColor = () => {
    var numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
    var letters = ['A', 'B', 'C', 'D', 'E', 'F'];
    var color = '';
    for (var i = 0; i < 3; i++) {
      var index = Math.floor(Math.random() * (numbers.length + letters.length));
      color += index < numbers.length ? numbers[index] : letters[index - numbers.length];
    }
    return color;
  };

  return (
    <>
      <div className="card">
        <img
          alt="real estate logo"
          src="https://media.istockphoto.com/id/1369053959/vector/house.jpg?s=612x612&w=0&k=20&c=iA7YgnbjMT89OD8WDtINPoD6p4-sY-GVp1Tt0YdeqxA="
        ></img>
        <div className="card-content">
          <h2>Two Pod Realty</h2>
          <p id="description">Real Estate Company Focused on delivering the best properties in the State College Area</p>
          <button className="details-button" onClick={toggleDescription} id="detailsBtn">
            Details
          </button>
        </div>
      </div>
      <button onClick={duplicateCard} id="btn">
        Duplicator
      </button>
      <button onClick={changeBackgroundColor} id="colorBtn">
        BGColorChanger
      </button>
      <button onClick={changeHeading} id="Headingbtn">
        HeadingChanger
      </button>
      <button onClick={deleteCard} id="dltbtn">
        DeleteCard
      </button>
    </>
  );
}

export default App;
