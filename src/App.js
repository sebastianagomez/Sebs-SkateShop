import './App.css';
import Navbar from './components/NavBar';
import ItemListContainer from "./components/Containers/ItemListContainer";
import { ItemDetailContainer } from "./components/Containers/ItemDetailContainer";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import CartContextProvider from './context/CartContext';
import { Cart } from './components/Cart/Cart';

function App() {
  // NavBar 
  const skate = "SKATES"
  const clothes = "CLOTHES"
  const shoes = "SHOES"
  const accessories = "ACCESSORIES"
  const contact = "CONTACT"
  const goToCart = "CART"

  return (
    <CartContextProvider>

      <Router>

        <Navbar skate={skate} clothes={clothes} shoes={shoes} accessories={accessories} contact={contact} goToCart={goToCart}/>

        <Switch>      

          <Route exact path="/" component={ItemListContainer}/>

          <Route exact path="/categoria/:id" component={ItemListContainer}/>

          <Route exact path="/detalle/:id" component={ItemDetailContainer}/>

          <Route exact path="/cart" component={Cart}/>

        </Switch>

      </Router>

    </CartContextProvider>
  );
}

export default App;