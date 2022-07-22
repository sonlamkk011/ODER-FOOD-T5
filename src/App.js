import './App.css';
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import Home from './Module/Public/Home/Home';
import Cart from './Module/Shared/Navbar/Cart/Cart';

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

  </Switch>
  </BrowserRouter>

  
  
  </>
  );
}

export default App;
