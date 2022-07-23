import './App.css';
import { BrowserRouter, Switch, Route, Redirect, Router } from "react-router-dom";

import Home from './Module/Public/Home/Home';
import Cart from './Module/Shared/Navbar/Cart/Cart';
import RiceDetails from './Module/Public/Details/RiceDetails/RiceDetails';
import DrinksDetails from './Module/Public/Details/DrinksDetails/DrinksDetails';
import BreadDetails from './Module/Public/Details/BreadDetails/BreadDetails';
import NoodlesDetails from './Module/Public/Details/NoodlesDetails/NoodlesDetails';
import PorridgeDetails from './Module/Public/Details/PorridgeDetails/PorridgeDetails';
import SnacksDetails from './Module/Public/Details/SnacksDetails/SnacksDetails';

import Contact from './Module/Public/Contact/Contact';
import About from './Module/Public/About/About';
import Blog from './Module/Public/Blog/Blog';
import TestHome from './Module/Public/Home/TestHome/TestHome';

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
    <Route path="/contact" exact>
      <Contact />
    </Route>
    <Route path="/about" exact>
      <About />
    </Route>
    <Route path="/blog" exact>
      <Blog />
    </Route>
    <Route path="/test" exact>
      <TestHome />
    </Route>

  </Switch>
  </BrowserRouter>

  
  
  </>
  );
}

export default App;
