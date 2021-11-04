import './App.css';
import Navbar from './components/NavBar';
import ItemListContainer from "./components/Containers/ItemListContainer";
import { ItemDetailContainer } from "./components/Containers/ItemDetailContainer";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import CartContextProvider from './context/CartContext';

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
    <CartContextProvider>
      <Router>
        <Navbar skate={skate} clothes={clothes} shoes={shoes} accessories={accessories} contact={contact} goToCart={goToCart}/>
        <Switch>        
          <Route exact path="/">          
            <ItemListContainer />
          </Route>
          <Route exact path="/categoria/:id" component={ItemListContainer}/>
          <Route exact path="/detalle/:id">
            <ItemDetailContainer/>
          </Route>

        </Switch>      
      </Router>
    </CartContextProvider>
  );
}

export default App;