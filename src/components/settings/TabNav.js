import React from "react";
import classes from "./TabNav.module.css";

const TabNav = () => {
  return (
    <div className={[`d-flex`, classes.tabDiv].join(" ")}>
      <label
        className={[
          `noMarginBottom`,
          classes.settingsTab,
          classes.activeTab,
        ].join(" ")}
      >
        General Settings
      </label>
      <label className={[`noMarginBottom`, classes.settingsTab].join(" ")}>
        Payment Gateway
      </label>
      <label className={[`noMarginBottom`, classes.settingsTab].join(" ")}>
        Social Login
      </label>
    </div>
  );
};

export default TabNav;
