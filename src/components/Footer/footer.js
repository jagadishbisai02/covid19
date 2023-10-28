import {Link} from 'react-router-dom'
import {FiGithub,FiInstagram,FiTwitter} from 'react-icons/fi'
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
        <p className='description'>we stand with everyone fighting on the front lines</p>
        <div className='icons'>
        <FiGithub size={35} color='#CBD5E1'/>
        <FiInstagram size={35} color='#CBD5E1'/>
        <FiTwitter size={35} color='#CBD5E1'/>
        </div>
      </div>
    </>
  );
};
export default Footer;
