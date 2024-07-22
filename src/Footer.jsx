import { Link } from "react-router-dom";
import "./Footer.css"
const Footer = () => {
    return (
      <footer className="footer">
        <div className="footer-content">
          <p>&copy; 2024 My Company. All rights reserved.</p>
          <nav>
            <ul className="footer-nav">
              <Link className="link" to='' >About</Link>
              <li><a href="">Contact</a></li>
              <li><a href="">Privacy Policy</a></li>
            </ul>
          </nav>
        </div>
      </footer>
    );
  };
  
  export default Footer;