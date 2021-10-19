import './App.css';
import Navbar from './components/NavBar';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  const skate = "SKATES"
  const clothes = "CLOTHES"
  const shoes = "SHOES"
  const accessories = "ACCESSORIES"
  const contact = "CONTACT"
  const goToCart = "GO TO CART"

  return (
    <Router>
      <Navbar skate={skate} clothes={clothes} shoes={shoes} accessories={accessories} contact={contact} goToCart={goToCart}/>
    </Router>
  );
}

export default App;
