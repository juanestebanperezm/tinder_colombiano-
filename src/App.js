import './App.css';
import Header from './Header.js'
import TinderTarjeta from './TinderTarjeta';
import SwipeButton from './SwipeButton';


function App() {
  return (
    <div className="App">
      <h1>Tinder Colombia</h1>
      <Header/>
      <TinderTarjeta/>
      <SwipeButton/>
    </div>
  );
}

export default App;
