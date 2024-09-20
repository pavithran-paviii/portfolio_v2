import React, { useState } from "react";
import classNames from "./home.module.scss";
import { LuGithub } from "react-icons/lu";
import { githubLink } from "../../assets/data";
import { FaArrowDown } from "react-icons/fa6";

const Home = () => {
  // is visible github
  const [isVisible, setIsVisible] = useState(false);
  const [position, setPosition] = useState({ top: 0, left: 0 });

  const handleMouseEnter = () => {
    setIsVisible(true);
  };

  const handleMouseMove = (e) => {
    console.log(e);
    setPosition({ top: e.clientY - 135, left: e.clientX - 135 });
  };

  const handleMouseLeave = () => {
    setIsVisible(false);
  };

  return (
    <section className={classNames.home}>
      <div className={classNames.introduction}>
        <div className={classNames.heroFade}></div>
        <div
          className={classNames.innerSystem}
          onMouseEnter={handleMouseEnter}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <div className={classNames.topBar}>
            <div className={classNames.windowDots}>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
          <div className={classNames.windowContent}>
            <div className={classNames.mainText}>
              I build things
              <div>for web!!</div>
            </div>
            <div className={classNames.currentExp}>
              <div>Developer at Nvest Campus.</div>
              <div>Based in Hyderabad.</div>
            </div>
            <FaArrowDown className={classNames.downArrow} />
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
      </div>
    </section>
  );
};

export default Home;
