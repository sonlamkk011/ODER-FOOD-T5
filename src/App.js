import './App.css';
import { BrowserRouter, Switch, Route, Redirect, Router } from "react-router-dom";

import Public from './Module/Public/Public';
import Admin from './Module/Admin/Admin';

function App() {
  return (
  <>
  <BrowserRouter >
    <Switch>
      <Route path="/admin" exact>
          <Admin /> 
      </Route>
    </Switch>
    
  </BrowserRouter>
  <Public />

  
  
  </>
  );
}

export default App;
