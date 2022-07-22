import Footer from "../../Shared/Footer/Footer";
import Header from "../../Shared/Header/Header";
import Navbar from "../../Shared/Navbar/Navbar";
import HomeSelection from "./Components/HomeSelection/HomeSelection";
import Search from "./Search/Search";

const Home =() => {
    return(
        <>
        <Header />
        <Navbar />
        <div className="container">
        <Search />
        <HomeSelection />
        </div>
        <Footer />

       
        </>
    )
}
export default Home;