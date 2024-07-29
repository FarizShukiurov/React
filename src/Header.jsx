import { Link } from "react-router-dom";
import './Header.css';

const Header = () => {
    
    return (
        <header className="header">
            <div className="companyName">NAMIK MARKET</div>
            <nav>
                <Link className="link" to='/'>Home</Link>
                <Link className="link" to='/catalog'>Catalog</Link>
                <Link className="link" to='/news'>News</Link>
                <Link className="link" to='/about'>About Us</Link>
            </nav>
            <div className="buttons-container">
                <Link to = "/register"><button>Register</button></Link>
                <Link to = "/login"><button>Login</button></Link>
            </div>
            
        </header>
    );
};

export default Header;