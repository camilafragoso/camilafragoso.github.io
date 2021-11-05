import './Shared.css';

function Navbar () {
    return (
        <div className='navbar-div'>
            <div className='nav-logo'>
                <a>
                    <img className='nav-logo-img' src='https://64.media.tumblr.com/ee4c7694e939c34b76d1a434173ed2f8/b131482d053e574e-a2/s540x810/705651ff55ad1cf319af53277a55ea6b1cb094f6.jpg'></img>
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