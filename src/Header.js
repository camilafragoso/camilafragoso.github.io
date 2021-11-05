import './Shared.css';

function Header () {
    return(
        <div className='header-div'>
            <div>
                <img className='header-img' src='https://64.media.tumblr.com/19a033443b537e664d5fe1482d2b3270/0e838ac7ad9c851b-f0/s540x810/0614830d8945d62a09f48c74985587606d9eba2a.png'></img>
            </div>
            <div className='header-text'>
                <h2 className='header-title'>Hi! I'm a Biomedical Engineer, Front-End Developer and Data Science Student!</h2>
                <p className='header-description'>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual.
                Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual.
                </p>
                <button className='header-button'>See Portfolio</button>
            </div>
        </div>
    )
}

export default Header;