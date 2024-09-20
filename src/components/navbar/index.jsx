import React, { useEffect, useRef, useState } from "react";
import classNames from "./navbar.module.scss";
import { Link, useLocation } from "react-router-dom";
import { GoArrowUpRight } from "react-icons/go";
import logo from "../../assets/images/logo.png";
import { LuGithub } from "react-icons/lu";
import { githubLink } from "../../assets/data";

const Navbar = () => {
  const location = useLocation();
  const focusLightRef = useRef(null);

  // is visible github
  const [isVisible, setIsVisible] = useState(false);
  const [position, setPosition] = useState({ top: 0, left: 0 });

  const handleMouseEnter = () => {
    setIsVisible(true);
  };

  const handleMouseMove = (e) => {
    setPosition({ top: e.clientY - 40, left: e.clientX - 40 });
  };

  const handleMouseLeave = () => {
    setIsVisible(false);
  };

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
        onMouseEnter={handleMouseEnter}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onClick={() => {
          window.open(githubLink, "_blank");
        }}
      >
        <img src={logo} alt="logo" />
        <div className={classNames.info}>
          <div>Pavithran</div>
          <div>Developer</div>
        </div>
        {isVisible && (
          <a
            className={classNames.hiddenNav}
            style={{ top: position.top, left: position.left }}
            href={githubLink}
            target="_blank"
          >
            <LuGithub />
          </a>
        )}
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
