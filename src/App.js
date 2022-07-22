import './App.css';
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import Home from './Module/Public/Home/Home';
import Cart from './Module/Shared/Navbar/Cart/Cart';
import RiceDetails from './Module/Public/Home/Components/Details/RiceDetails/RiceDetails';

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

  </Switch>
  </BrowserRouter>

  
  
  </>
  );
}

export default App;
