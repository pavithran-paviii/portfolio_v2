import React from "react";
import classNames from "./navbar.module.scss";
import { Link, useLocation } from "react-router-dom";
import { GoArrowUpRight } from "react-icons/go";

const Navbar = () => {
  const location = useLocation();
  return (
    <div className={classNames.navbar}>
      <div>Pavithran</div>
      <div className={classNames.navigations}>
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
