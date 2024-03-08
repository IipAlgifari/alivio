import { Link } from "react-router-dom";


const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <Link href="#" className="footer__logo"><img src="asset/images/logo/alivio-white.svg" className="footer__logo__el" /></Link>
        <ul className="footer__menu">
          <li className="footer__menu__item"><a className="footer__menu__link" href="#">Why Alivio</a></li>
          <li className="footer__menu__item"><a className="footer__menu__link" href="#">Solutionts</a></li>
          <li className="footer__menu__item"><a className="footer__menu__link" href="#">Community</a></li>
          <li className="footer__menu__item"><a class="footer__menu__link" href="#">Pricing</a></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
