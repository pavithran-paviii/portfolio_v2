import React, { useEffect, useRef } from "react";
import classNames from "./navbar.module.scss";
import { Link, useLocation } from "react-router-dom";
import { GoArrowUpRight } from "react-icons/go";
import logo from "../../assets/images/logo.png";
import { githubLink } from "../../assets/data";

const Navbar = () => {
  const location = useLocation();
  const focusLightRef = useRef(null);

  // render for navigation menu

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
      <div
        className={classNames.logoDiv}
        onClick={() => {
          window.open(githubLink, "_blank");
        }}
      >
        <img src={logo} alt="logo" />
        <div className={classNames.info}>
          <div>Pavithran</div>
          <div>Developer</div>
        </div>
      </div>
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
