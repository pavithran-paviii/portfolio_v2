import React, { useEffect, useRef } from "react";
import classNames from "./navbar.module.scss";
import { Link, useLocation } from "react-router-dom";
import { GoArrowUpRight } from "react-icons/go";

const Navbar = () => {
  const location = useLocation();
  const focusLightRef = useRef(null);

  useEffect(() => {
    const currentNav = document.querySelector(`.${classNames.currentNav}`);
    const focusLight = focusLightRef.current;
    if (currentNav && focusLight) {
      const { offsetLeft, offsetWidth } = currentNav;
      focusLight.style.left = `${offsetLeft + offsetWidth / 2 - 17}px`;
    }
  }, [location]);

  return (
    <div className={classNames.navbar}>
      <div>Pavithran</div>
      <div className={classNames.navigations}>
        <div className={classNames.focusLight} ref={focusLightRef}></div>
        <Link
          className={location?.pathname == "/" && classNames.currentNav}
          to="/"
        >
          Work
        </Link>
        <Link
          className={location?.pathname == "/info" && classNames.currentNav}
          to="/info"
        >
          Info
        </Link>
      </div>
      <div className={classNames.links}>
        <a href="">
          LinkedIn <GoArrowUpRight />
        </a>
        <a href="">
          Resume <GoArrowUpRight />
        </a>
      </div>
    </div>
  );
};

export default Navbar;
