import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";


const Header = () => {
  const [position, setPosition] = useState(window.pageYOffset);
  const [visible, setVisible] = useState(true);
  const [showMenu, setShowMenu] = useState(false);

    // --handleScrollHeader
  useEffect(() => {
    const handleScroll = () => {
      let moving = window.pageYOffset;
      setVisible(position > moving);
      setPosition(moving);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });
  const cls = visible ? "visible" : "hidden";
  
  useEffect(() => {
    if (showMenu) {
      document.body.classList.add("show-menu");
    } else {
      document.body.classList.remove("show-menu");
    }
  }, [showMenu]);

  // Handle toggle menu
  const handleToggleMenu = () => {
    setShowMenu(!showMenu);
    console.log(showMenu);
  };

  return (
    <header className={cls}>
      <div className="container">
        <div className="header">
          <div className="header__wrapper">
            <Link to="#" className="header__logo">
              <img src="asset/images/logo/Logo.svg" className="header__logo__el" alt="Alivio"/>
            </Link>
            <button className="burger-menu" id="jsMenu" onClick={handleToggleMenu}>
              <span className="burger__menu__bar"></span>
              <span className="burger__menu__bar"></span>
              <span className="burger__menu__bar"></span>
            </button>
            <div className={`header__menu ${showMenu ? 'show-menu' : ''}`} id="jsHeaderMenu">
              <ul className="header__nav main">
                <li className="header__nav__item"><Link to="#" className="header__nav__link active">Why Alivio</Link></li>
                <li className="header__nav__item"><Link to="#" className="header__nav__link">Solutions</Link></li>
                <li className="header__nav__item"><Link to="#" className="header__nav__link">Community</Link></li>
                <li className="header__nav__item"><Link to="#" className="header__nav__link">Pricing</Link></li>
              </ul>
              <ul className="header__nav auth">
                <li className="header__nav__item"><Link to="#" className="header__nav__link">Sig in</Link></li>
                <li className="header__nav__item"><Link to="#" className="btn">Start Trial</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>  
    </header>
  );
};

export default Header;
