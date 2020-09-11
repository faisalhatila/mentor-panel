import React, { useState } from "react";
import { Link } from "react-router-dom";
import { head } from "lodash";

const HomeContainer = () => {
  return (
    <div className="home-container row myContainer">
      <div className="col" style={{ flex: 1 }}>
        left
      </div>
      <div className="col" style={{ flex: 3 }}>
        right
      </div>
    </div>
  );
};

export default HomeContainer;
