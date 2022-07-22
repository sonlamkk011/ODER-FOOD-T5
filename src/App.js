import './App.css';
import { BrowserRouter, Switch, Route, Redirect, Router } from "react-router-dom";

import Home from './Module/Public/Home/Home';
import Cart from './Module/Shared/Navbar/Cart/Cart';
import RiceDetails from './Module/Public/Home/Components/Details/RiceDetails/RiceDetails';
import PorridgeDetails from './Module/Public/Home/Components/Details/PorridgeDetails/PorridgeDetails';
import BreadDetails from './Module/Public/Home/Components/Details/BreadDetails/BreadDetails';
import SnacksDetails from './Module/Public/Home/Components/Details/SnacksDetails/SnacksDetails';
import DrinksDetails from './Module/Public/Home/Components/Details/DrinksDetails/DrinksDetails';
import NoodlesDetails from './Module/Public/Home/Components/Details/NoodlesDetails/NoodlesDetails';

function App() {
  return (
  <>
  <BrowserRouter >
  <Switch >
    <Route path="/cart" exact >
    <Cart />
    </Route>
    <Route path="/" exact>
      <Home />
    </Route>
    <Route path="/rice-details" exact>
      <RiceDetails />
    </Route>
    <Route path="/porridge-details" exact>
      <PorridgeDetails />
    </Route>
    <Route path="/bread-details" exact>
      <BreadDetails />
    </Route>
    <Route path="/snacks-details" exact>
      <SnacksDetails />
    </Route>
    <Route path="/drinks-details" exact>
      <DrinksDetails />
    </Route>
    <Route path="/noodles-details" exact>
      <NoodlesDetails />
    </Route>

  </Switch>
  </BrowserRouter>

  
  
  </>
  );
}

export default App;
