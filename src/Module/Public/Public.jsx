import { BrowserRouter, Switch, Route } from "react-router-dom"
import Cart from "../Shared/Navbar/Cart/Cart";
import About from "./About/About";
import Blog from "./Blog/Blog";
import Contact from "./Contact/Contact";
import BreadDetails from "./Details/BreadDetails/BreadDetails";
import DrinksDetails from "./Details/DrinksDetails/DrinksDetails";
import NoodlesDetails from "./Details/NoodlesDetails/NoodlesDetails";
import PorridgeDetails from "./Details/PorridgeDetails/PorridgeDetails";
import RiceDetails from "./Details/RiceDetails/RiceDetails";
import SnacksDetails from "./Details/SnacksDetails/SnacksDetails";
import Home from "./Home/Home";
import TestHome from "./Home/TestHome/TestHome";



const Public = () => {
    return(
        <>
        <BrowserRouter>
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
    )
}
export default Public;