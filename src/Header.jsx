import { Link } from "react-router-dom";
import './Header.css';
const Header = () => {
    return (
        <header className="header">
            <div className="companyName">Namik Tupoy</div>
            <nav>
                <Link className="link" to='/'>Home</Link>
                <Link className="link" to=''>Catalog</Link>
                <Link className="link" to=''>News</Link>
                <Link className="link" to=''>About Us</Link>
            </nav>
        </header>
    );
};

export default Header;