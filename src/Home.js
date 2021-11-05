import About from "./About";
import CTA from "./CTA";
import Footer from "./Footer";
import Header from "./Header";
import Navbar from "./Navbar";
import Projects from "./Projects";
import './Shared.css';


function Home () {
    
    const renderFrontProjects = () => {
        const projects = ([{imgsrc: 'https://blog.arbit.com.br/wp-content/uploads/2019/01/262823-o-guia-completo-sobre-data-science-tudo-o-que-voce-precisa-saber.jpg', title: 'first project', description: 'lorem ipsum'}, 
                {imgsrc: 'def', title: 'second project', description: 'lorem ipsum dolor'},
                {imgsrc: 'fgh', title: 'third project', description: 'lorem'},
                {imgsrc: 'ijk', title: 'fourth project', description: 'ipsum dolor'}])
        return (
            <div className='home-projects'>
                <img className='arrow' src='https://64.media.tumblr.com/621416e92b2564b9236cc4b54217210f/76622f2446d10f50-a9/s540x810/945f81dfc3947dc0ebb47f8db69e68de98738745.jpg'></img>
                <Projects 
                    src={projects[0].imgsrc} title={projects[0].title} description={projects[0].description}>
                </Projects>
                <Projects 
                    src={projects[0].imgsrc} title={projects[1].title} description={projects[1].description}>
                </Projects>
                <Projects 
                    src={projects[0].imgsrc} title={projects[2].title} description={projects[2].description}>
                </Projects>
                <img className='arrow' src='https://64.media.tumblr.com/6eb2c7d5856ae4bf0eb147aa8b812ef0/76622f2446d10f50-52/s540x810/7f77804cb416112cee176eb65f017084b23739f8.jpg'></img>
            </div>
        )
    }

    const renderDataProjects = () => {
        const projects = ([{imgsrc: 'https://blog.arbit.com.br/wp-content/uploads/2019/01/262823-o-guia-completo-sobre-data-science-tudo-o-que-voce-precisa-saber.jpg', title: 'first data project', description: 'lorem ipsum'}, 
                {imgsrc: 'def', title: 'second data project', description: 'lorem ipsum dolor'},
                {imgsrc: 'fgh', title: 'third data project', description: 'lorem'},
                {imgsrc: 'ijk', title: 'fourth data project', description: 'ipsum dolor'}])
        return (
            <div className='home-projects'>
                <img className='arrow' src='https://64.media.tumblr.com/621416e92b2564b9236cc4b54217210f/76622f2446d10f50-a9/s540x810/945f81dfc3947dc0ebb47f8db69e68de98738745.jpg'></img>
                <Projects 
                    src={projects[0].imgsrc} title={projects[0].title} description={projects[0].description}>
                </Projects>
                <Projects 
                    src={projects[0].imgsrc} title={projects[1].title} description={projects[1].description}>
                </Projects>
                <Projects 
                    src={projects[0].imgsrc} title={projects[2].title} description={projects[2].description}>
                </Projects>
                <img className='arrow' src='https://64.media.tumblr.com/6eb2c7d5856ae4bf0eb147aa8b812ef0/76622f2446d10f50-52/s540x810/7f77804cb416112cee176eb65f017084b23739f8.jpg'></img>
            </div>
            
        )
    }
    

    return (
        <div className="home">
            <Navbar></Navbar>
            <Header></Header>
            <h3 className='home-proj-title'>Front-End Projects</h3>
            {renderFrontProjects()}
            <h3 className='home-proj-title'>Data Science Projects</h3>
            {renderDataProjects()}
            <CTA></CTA>
            <About></About>
            <Footer></Footer>
        </div>
        
    );
}

export default Home;