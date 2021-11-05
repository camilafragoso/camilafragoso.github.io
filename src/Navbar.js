import './Shared.css';

function Navbar () {
    return (
        <div className='navbar-div'>
            <div className='nav-logo'>
                <a>
                    <img className='nav-logo-img' src='https://upload.wikimedia.org/wikipedia/commons/9/9f/CF_Athletic_Logo-01-01_%283%29.png'></img>
                </a>
            </div>
            <div className='nav-link'>
                <a>Home</a>
                <a>Projects</a>
                <a>About</a>
                <button className='nav-contact-button'>Contact</button>
            </div>
        </div>
    )
}
export default Navbar;