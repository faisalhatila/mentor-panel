import React from "react";
import { Link } from "react-router-dom";
import classes from "./LeftMenu.module.css";

const LeftMenu = (props) => {
  const menuItem = [
    {
      id: 0,
      title: "Dashboard",
      image: "assets/img/leftMenu/mentees.png",
      link: "/",
    },
    {
      id: 2,
      title: "Profile",
      image: "assets/img/leftMenu/report.png",
      link: "/profile",
    },
    {
      id: 2,
      title: "Mentees",
      image: "assets/img/leftMenu/report.png",
      link: "/mentees-list",
    },
    {
      id: 3,
      title: "Message",
      image: "assets/img/leftMenu/services.png",
      link: "/messages",
    },
    {
      id: 4,
      title: "Services",
      image: "assets/img/leftMenu/mentees.png",
      link: "/services",
    },
    {
      id: 5,
      title: "Report",
      image: "assets/img/leftMenu/report.png",
      link: "/report",
    },
    {
      id: 6,
      title: "Activity Log",
      image: "assets/img/leftMenu/services.png",
      link: "/activity-log",
    },
    {
      id: 7,
      title: "Settings",
      image: "assets/img/leftMenu/services.png",
      link: "/settings",
    },
  ];
  return (
    <div className={[`mt-5`, `col`, classes.leftMenuMainDiv].join(" ")}>
      <div className={`pt-5`}>
        {menuItem.map((item, i) => {
          return (
            <div className="d-flex mt-4" key={i}>
              <span className={classes.leftSpan}></span>
              <div>
                <img alt={item.title} src={item.image} className=" ml-5" />
                <label className={`ml-4 noMarginBottom`}>
                  <Link style={{ color: "#666666" }} to={item.link}>
                    {item.title}
                  </Link>
                </label>
              </div>
            </div>
          );
        })}
        {/* {menuItem
          .filter((item) => item.id === 2)
          .map((menu, i) => {
            return (
              <div className="d-flex mt-4" key={i}>
                <span className={classes.leftSpan}></span>
                <div>
                  <img alt={menu.title} src={menu.image} className=" ml-5" />
                  <label className={`ml-4 noMarginBottom`}>{menu.title}</label>
                </div>
              </div>
            );
          })} */}
      </div>
    </div>
  );
};

export default LeftMenu;
