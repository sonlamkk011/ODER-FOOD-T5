import { BrowserRouter, Route, Switch } from "react-router-dom";
import Oder from "./Dasboard/Oders/Oder";
import Header from "./Shared/Header/Header"
import Navbar from "./Shared/Navbar/Navbar";




const Admin = () => {
    return(
        <>
        <BrowserRouter>
        <Switch>
            <Route path="/oders" exact>
                <Oder />
            </Route>
        </Switch>
        </BrowserRouter>
      
        <Navbar />
        <Header />
        </>
    )

}
export default Admin;