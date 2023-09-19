import logo from './logo.svg';
import './App.css';

function App() {


    return (
      <div className="App">
         <h1>Hello World!</h1>
        <h1>Welcome to my card</h1>
        <img src="https://cdn.creatureandcoagency.com/uploads/2021/03/FrogLifecycle_Body_8.png" alt="Frog" />
        <div className="paragraph">
          <p>This is a picture of a frog that I found on the internet. It looks really cool, and I thought it would be nice to share.</p>
        </div>
        <div class="btn-wrapper">
 <a href="https://hax.psu.edu">
   <button>Details</button> </a> 
   <button id="btn">Duplicator</button>
  <button id="colorBtn">BGColorChanger</button>
  <button id="Headingbtn">HeadingChanger</button>
  <button id="dltbtn">DeleteCard</button></div>
      </div>
    );
  }

export default App;
