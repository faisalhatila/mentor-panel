import React from "react";
import classes from "./SearchUser.module.css";
const SearchUser = () => {
  return (
    <div
      className={[
        `d-flex`,
        `align-items-center`,
        classes.searchUserMainDiv,
      ].join(" ")}
    >
      <i
        className={[`fas`, `fa-search`, `mr-1`, classes.searchIcon].join(" ")}
      ></i>
      <input type="text" placeholder="Search" className={classes.searchField} />
    </div>
  );
};

export default SearchUser;
