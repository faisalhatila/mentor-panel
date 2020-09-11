import React from "react";

const HeaderCover = (props) => {
  return (
    <div className="headerCoverMainDiv">
      <div className="headerCoverDiv">
        <div className="container d-flex justify-content-center align-items-center headerCoverHeaderDiv">
          <h1 className="headerCoverHeading">{props.heading}</h1>
        </div>
      </div>
      {props.children}
    </div>
  );
};

export default HeaderCover;
