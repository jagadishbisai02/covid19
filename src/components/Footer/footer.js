import {Link} from 'react-router-dom'
import {FiInstagram} from 'react-icons/fi'
import {FaTwitter} from 'react-icons/fa'
import {VscGithubAlt} from 'react-icons/vsc'
import './footer.css'

const Footer = () => {
  return (
    <>
      <div className='footer-container'>
        <Link to="/" className="link">
          <h1 className="header">
            COVID19<span className="span-header">INDIA</span>
          </h1>
        </Link>
        <p className='footer-description'>we stand with everyone fighting on the front lines</p>
        <div className='footer-icons-container'>
        <VscGithubAlt className='footer-icons'/>
        <FiInstagram className='footer-icons'/>
        <FaTwitter className='footer-icons'/>
        </div>
      </div>
    </>
  );
};
export default Footer;
