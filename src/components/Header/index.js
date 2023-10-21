import { Link } from "react-router-dom";
import "./index.css";

const Header = () => {
  return (
    <>
      <nav className="navbar-header">
        <Link to="/" className="link">
          <h1 className="header">
            COVID19<span className="span-header">INDIA</span>
          </h1>
        </Link>
        <ul className="item-list">
          <Link to="/" className="link">
            <li className="item">Home</li>
          </Link>
          <Link to="/about" className="link">
            <li className="item">About</li>
          </Link>
        </ul>
      </nav>
    </>
  );
};
export default Header;
