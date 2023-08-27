import { useEffect } from "react";
import { Link, useLocation, useNavigate, Route } from "react-router-dom";
import "./Footer.scss";

const Footer = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="footer">
      <div className="container">
        <div className="top">
          <div className="item">
            <h1>Categories</h1>
            <Link to="/gigs?category=ai" className="link">
              <span className="text">AI Artist</span>
            </Link>
            <Link to="/gigs?category=design" className="link">
              <span className="text">Graphic & Design</span>
            </Link>
            <Link to="/gigs?category=books" className="link">
              <span className="text">Writing & Translation</span>
            </Link>
            <Link to="/gigs?category=video" className="link">
              <span className="text">Video & Animation</span>
            </Link>
            <Link to="/gigs?category=video" className="link">
              <span className="text">Digital Marketing</span>
            </Link>
            

            

            <span>Digital Marketing</span>
            <span>Writing & Translation</span>
            <span>Video & Animation</span>
            <span>Music & Audio</span>
            <span>Programming & Tech</span>
            <span>Data</span>
            <span>Business</span>
            <span>Lifestyle</span>
            <span>Photography</span>
            <span>Sitemap</span>
          </div>
          <div className="item">
            <h1>About</h1>
            <span>Careers</span>
            <span>Press & News</span>
            <span>Partnership</span>
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
            <span>Intellectual Property Claims</span>
            <span>Investor Relations</span>
          </div>
          <div className="item">
            <h1>Support</h1>
            <span>Help & Support</span>
            <span>Trust & Safety</span>
            <span>Selling on GigFindr</span>
            <span>Buying on GigFindr</span>
          </div>
          <div className="item">
            <h1>Community</h1>
            <span>Events</span>
            <span>Blog</span>
            <span>Forum</span>
            <span>Community Standards</span>
            <span>Podcast</span>
            <span>Affiliats</span>
            <span>Invite a Friend</span>
          </div>
          <div className="item">
            <h1>More From GigFindr</h1>
            <span>GigFindr Business</span>
            <span>GigFindr Pro</span>
            <span>GigFindr Studios</span>
            <span>GigFindr Logo Maker</span>
            <span>GigFindr Guild</span>
            <span>Get Inspired</span>
            <span>GigFindr Select</span>
            <span>Clear Voice</span>
            <span>GigFindr Workspace</span>
            <span>Learn</span>
            <span>Working Not Working</span>
          </div>
        </div>
        <hr />
        <div className="bottom">
          <div className="left">
            <h2>GigFindr</h2>
            <span>© GigFindr. {new Date().getFullYear()}</span>
          </div>
          <div className="right">
            <div className="social">
              <img src="./media/twitter.png" alt="" />
              <img src="./media/facebook.png" alt="" />
              <img src="./media/linkedin.png" alt="" />
              <img src="./media/pinterest.png" alt="" />
              <img src="./media/instagram.png" alt="" />
            </div>
            <div className="link">
              <img src="./media/language.png" alt="" />
              <span>English</span>
            </div>
            <div className="link">
              <img src="./media/coin.png" alt="" />
              <span>INR</span>
            </div>
            <div className="link">
              <img src="./media/accessibility.png" alt="" />
              <span>INR</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
