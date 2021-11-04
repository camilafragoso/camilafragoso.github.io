import './Shared.css';

function Navbar () {
    return (
        <div className='navbar-div'>
            <div className='navbar-home'><a>Home</a></div>
            <div className='navbar-projects'><a>Projects</a></div>
            <div className='navbar-about'><a>About</a></div>
            <div className='navbar-contact'><a>Contact</a></div>
        </div>
    )
}
export default Navbar;