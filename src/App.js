import logo from './logo.svg';
import './App.css';

function App() {


    return (
      <div className="Card">
        <img alt="real estate logo" src="./housepic.jpg"></img>
         <div class="card-content"> 
      <h2>Two Pod Realty</h2> 
      <p id="description">Real Estate Company Focused on delivering the best properties in the State College Area</p> 
      <button class="details-button" id="detailsBtn">Details</button>
    </div> 
  
  <button id="btn">Duplicator</button>
  <button id="colorBtn">BGColorChanger</button>
  <button id="Headingbtn">HeadingChanger</button>
  <button id="dltbtn">DeleteCard</button>
      </div>
    );
  }

export default App;
