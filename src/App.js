import logo from './logo.svg';
import './App.css';

function App() {


    return (
      <><div className="Card">
        <img alt="real estate logo" src="https://media.istockphoto.com/id/1369053959/vector/house.jpg?s=612x612&w=0&k=20&c=iA7YgnbjMT89OD8WDtINPoD6p4-sY-GVp1Tt0YdeqxA="></img>
        <div class="card-content">
          <h2>Two Pod Realty</h2>
          <p id="description">Real Estate Company Focused on delivering the best properties in the State College Area</p>
          <button class="details-button" id="detailsBtn">Details</button>
        </div>
      </div>
      <button id="btn">Duplicator</button>
      <button id="colorBtn">BGColorChanger</button>
      <button id="Headingbtn">HeadingChanger</button>
      <button id="dltbtn">DeleteCard</button>
      </>
      
    );
  }

export default App;
