import Navbar from "./components/Navbar.jsx";
import Hero from './components/Hero.jsx'
import Context from "./components/Context.jsx";
import Footer from "./components/Footer.jsx"


function Home() {
    return(
      <>
        <Navbar />
        <Hero />
        <Context />
        <Footer />
      </>
    );
}

export default Home;