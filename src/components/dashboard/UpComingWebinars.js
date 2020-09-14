import React from "react";
import classes from "./UpComingWebinars.module.css";

const UpComingWebinars = () => {
  return (
    <div>
      <h4 style={{ fontSize: "16px" }} className="whiteBack p-3">
        Upcoming Webinars
      </h4>
      <table className={classes.UpComingWebinarsTable}>
        <thead>
          <tr className="">
            <td
              style={{ fontSize: "11px", minWidth: "150px" }}
              className="pt-2 pb-3"
            >
              Mentee Name
            </td>
            <td
              style={{ fontSize: "11px", minWidth: "150px" }}
              className="pt-2 pb-3"
            >
              Course
            </td>
            <td
              style={{ fontSize: "11px", minWidth: "150px" }}
              className="pt-2 pb-3"
            >
              Category
            </td>
            <td
              style={{ fontSize: "11px", minWidth: "100px" }}
              className="pt-2 pb-3"
            >
              Amount
            </td>
            <td
              style={{ fontSize: "11px", minWidth: "100px" }}
              className="pt-2 pb-3"
            >
              Time Frame
            </td>
            <td
              style={{ fontSize: "11px", minWidth: "100px" }}
              className="pt-2 pb-3"
            >
              Zoom
            </td>
            <td
              style={{ fontSize: "11px", minWidth: "100px" }}
              className="pt-2 pb-3"
            >
              Action
            </td>
          </tr>
        </thead>
        <tbody>
          {[...Array(6)].map((i) => {
            return (
              <tr
                style={{ height: "50px" }}
                className={[`whiteBack`, classes.UpComingWebinarsTableRow].join(
                  " "
                )}
              >
                <td style={{ fontSize: "12px" }} className="mr-5">
                  <div className="">
                    <img
                      alt="user"
                      src="assets/img/dashboard/userAvatar.png"
                      style={{ maxWidth: "28px", borderRadius: "50%" }}
                      className="mr-2"
                    />
                    <label className="noMarginBottom">Larry Guerrero</label>
                  </div>
                </td>
                <td style={{ fontSize: "12px" }} className="mr-5">
                  Mechanical
                </td>
                <td style={{ fontSize: "12px" }} className="mr-5">
                  Enginerring
                </td>
                <td style={{ fontSize: "12px" }} className="mr-5">
                  $1000.00
                </td>
                <td style={{ fontSize: "12px" }} className="mr-5">
                  4 Sep 2020
                </td>
                <td style={{ fontSize: "12px" }} className="mr-5">
                  Zoom Link
                </td>
                <td style={{ fontSize: "12px", flex: 3 }}>
                  <div className="d-flex justify-content-between">
                    <label
                      className={[
                        `mr-2`,
                        `text-center`,
                        `noMarginBottom`,
                        classes.tableRescheduleButton,
                      ].join(" ")}
                      style={{ flex: 50 }}
                    >
                      Re-Schedule
                    </label>
                    <span style={{ flex: 1 }}></span>
                    <label
                      className={[
                        `text-center`,
                        `noMarginBottom`,
                        classes.tableCancelButton,
                      ].join(" ")}
                      style={{ flex: 50 }}
                    >
                      Cancel
                    </label>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default UpComingWebinars;
