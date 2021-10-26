import './App.css';
import Navbar from './components/NavBar';
import ItemListContainer from "./components/Containers/ItemListContainer";
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  // NavBar 
  const skate = "SKATES"
  const clothes = "CLOTHES"
  const shoes = "SHOES"
  const accessories = "ACCESSORIES"
  const contact = "CONTACT"
  const goToCart = "CART"

  // ItemList
  const greeting = "Something here"

  return (
    <Router>
      <Navbar skate={skate} clothes={clothes} shoes={shoes} accessories={accessories} contact={contact} goToCart={goToCart}/>
      <ItemListContainer greeting={greeting}/>
    </Router>
  );
}

export default App;