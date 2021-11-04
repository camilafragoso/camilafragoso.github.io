import About from "./About";
import CTA from "./CTA";
import Footer from "./Footer";
import Header from "./Header";
import Navbar from "./Navbar";
import Projects from "./Projects";
import './Shared.css';

function Home () {

    return (
        <div className="home">
            <Navbar></Navbar>
            <Header></Header>
            <div>
                <h3 className='title'>Projects</h3>
                <Projects></Projects>
            </div>
            <CTA></CTA>
            <About></About>
            <Footer></Footer>
        </div>
        
    );
}

export default Home;