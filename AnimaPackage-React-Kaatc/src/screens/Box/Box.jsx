import React from "react";
import "./style.css";

export const Box = () => {
  return (
    <div className="box">
      <div className="iphone-pro-max-wrapper">
        <div className="iphone-pro-max">
          <div className="overlap">
            <div className="ellipse" />
            <h1 className="text-wrapper">An Artistic Exploration</h1>
            <p className="p">
              The Renaissance era was a period of rebirth in almost all the cultural and societal faculties and
              institutions
            </p>
            <img className="img" alt="Ellipse" src="/img/ellipse-14.svg" />
            <div className="div">Explore more</div>
          </div>
          <div className="text-wrapper-2">Renaissance</div>
          <div className="group">
            <img className="group-2" alt="Group" src="/img/group-62.png" />
          </div>
          <div className="overlap-group-wrapper">
            <div className="overlap-group">
              <div className="rectangle" />
              <img className="mask-group" alt="Mask group" src="/img/mask-group.png" />
              <img className="rectangle-2" alt="Rectangle" src="/img/rectangle-1070.svg" />
              <div className="image-wrapper">
                <img className="image" alt="Image" src="/img/image-21.png" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
