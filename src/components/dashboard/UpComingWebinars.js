import React from "react";
import classes from "./UpComingWebinars.module.css";

const UpComingWebinars = () => {
  return (
    <div>
      <h4 style={{ fontSize: "16px" }}>Upcoming Webinars</h4>
      <table className={classes.UpComingWebinarsTable}>
        <thead>
          <tr className="">
            <td style={{ fontSize: "11px", minWidth: "150px" }}>Mentee Name</td>
            <td style={{ fontSize: "11px", minWidth: "150px" }}>Course</td>
            <td style={{ fontSize: "11px", minWidth: "150px" }}>Category</td>
            <td style={{ fontSize: "11px", minWidth: "150px" }}>Amount</td>
            <td style={{ fontSize: "11px", minWidth: "150px" }}>Time Frame</td>
            <td style={{ fontSize: "11px", minWidth: "150px" }}>Zoom</td>
            <td style={{ fontSize: "11px", minWidth: "150px" }}>Action</td>
          </tr>
        </thead>
        <tbody>
          {[...Array(6)].map((i) => {
            return (
              <tr
                style={{ height: "50px" }}
                className={classes.UpComingWebinarsTableRow}
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
                    >
                      Re-Schedule
                    </label>
                    <label
                      className={[
                        `text-center`,
                        `noMarginBottom`,
                        classes.tableCancelButton,
                      ].join(" ")}
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
