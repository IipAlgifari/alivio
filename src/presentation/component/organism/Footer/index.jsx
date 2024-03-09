import { Link } from "react-router-dom";


const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <Link href="#" className="footer__logo">
          <img src="asset/images/logo/alivio-white.svg" className="footer__logo__el" alt="footer-logo" />
        </Link>
        <ul className="footer__menu">
          <li className="footer__menu__item"><Link className="footer__menu__link" to="#">Why Alivio</Link></li>
          <li className="footer__menu__item"><Link className="footer__menu__link" to="#">Solutionts</Link></li>
          <li className="footer__menu__item"><Link className="footer__menu__link" to="#">Community</Link></li>
          <li className="footer__menu__item"><Link class="footer__menu__link" to="#">Pricing</Link></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
