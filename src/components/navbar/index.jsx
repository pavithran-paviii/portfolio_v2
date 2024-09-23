import React, { useEffect, useRef, useState } from "react";
import classNames from "./navbar.module.scss";
import { Link, useLocation } from "react-router-dom";
import { GoArrowUpRight } from "react-icons/go";
import logo from "../../assets/images/logo.png";
import { githubLink, linkedinLink, resumeLink } from "../../assets/data";
import { MdAlternateEmail } from "react-icons/md";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
  const [mobileLinksOpen, setMobileLinksOpen] = useState(false);
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
        <a href={linkedinLink} target="_blank">
          LinkedIn <GoArrowUpRight />
        </a>
        <a href={resumeLink} target="_blank">
          Resume <GoArrowUpRight />
        </a>
      </div>
      <div
        className={classNames.linksMobile}
        // style={{ overflow: mobileLinksOpen ? "" : "hidden" }}
      >
        <div onClick={() => setMobileLinksOpen((prev) => !prev)}>
          <MdAlternateEmail
            style={{
              opacity: mobileLinksOpen ? 0 : "",
              transform: mobileLinksOpen
                ? "translate(-50%, -50%) rotate(360deg)"
                : "",
            }}
          />
          <IoClose
            style={{
              opacity: !mobileLinksOpen ? 0 : "",
              transform: !mobileLinksOpen
                ? "translate(-50%, -50%) rotate(360deg)"
                : "",
            }}
          />
        </div>
        <div
          className={classNames.linksDropdown}
          style={{
            top: mobileLinksOpen ? "" : "-50px",
            right: mobileLinksOpen ? "" : "-50px",
            height: mobileLinksOpen ? "" : "0",
            width: mobileLinksOpen ? "" : "0",
            opacity: mobileLinksOpen ? "" : "0",
          }}
        >
          <a href={linkedinLink} target="_blank">
            LinkedIn <GoArrowUpRight />
          </a>
          <a href={resumeLink} target="_blank">
            Resume <GoArrowUpRight />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
