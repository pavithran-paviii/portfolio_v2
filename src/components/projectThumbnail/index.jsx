import React from "react";
import classNames from "./projectThumbnail.module.scss";

//assets
import southernCurryHouse from "../../assets/images/projects/sch.png";

const ProjectThumbnail = () => {
  return (
    <div className={classNames.projectThumbnail}>
      <div className={classNames.innerContainer}>
        <div className={classNames.title}>Stadia bluetooth</div>
        <div className={classNames.oneLiner}>
          <div>Googe, 23 </div>
          <span>-</span>
          <div>Giving a second life to more than a million controllers</div>
        </div>
        <img src={southernCurryHouse} alt="southernCurryHouse" />
      </div>
    </div>
  );
};

export default ProjectThumbnail;
