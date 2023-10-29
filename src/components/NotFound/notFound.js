import { Link } from "react-router-dom";
import "./notFound.css";

const NotFound = () => (
  <div className="not-found-container">
    <img
      src="https://res.cloudinary.com/df5wssoz1/image/upload/v1698556761/samples/Covid19/Vector_ariond.png"
      alt="not-found"
    />
    <h1 className="not-found-heading">PAGE NOT FOUND</h1>
    <p className="not-found-desc">
      we’re sorry, the page you requested could not be found.Please go back to
      the homepage
    </p>
    <button type="button" className="home-btn">
      <Link to="/" className="link-btn">Home</Link>
    </button>
  </div>
);
export default NotFound;
