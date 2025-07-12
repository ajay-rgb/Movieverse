import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar(){
    return(
        <nav className="navbar">
            <div className='navbar-brand'>
                <Link to="/" className='nav-links' >Movie App</Link>


                <div>

                                    <Link to="/Home" className='nav-links'>Home</Link>
                <Link to="/Favourite" className='nav-links'>Favourite</Link>


                </div>


            </div>

        </nav>

    );
}


export default Navbar;