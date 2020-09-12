import React from "react";
import classes from "./Invoices.module.css";
const Invoices = () => {
  return (
    <div>
      <h4 style={{ fontSize: "16px" }}>Invoices</h4>
      <table className={classes.UpComingWebinarsTable}>
        <thead>
          <tr className="">
            <td style={{ fontSize: "11px", minWidth: "180px" }}>Invoices</td>
            <td style={{ fontSize: "11px", minWidth: "180px" }}>ID</td>
            <td style={{ fontSize: "11px", minWidth: "180px" }}>Mentee</td>
            <td style={{ fontSize: "11px", minWidth: "180px" }}>Amount</td>
            <td style={{ fontSize: "11px", minWidth: "180px" }}>Status</td>
            <td style={{ fontSize: "11px", minWidth: "180px" }}>Action</td>
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
                  INVoo1
                </td>
                <td style={{ fontSize: "12px" }} className="mr-5">
                  #01
                </td>
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
                  $1000.00
                </td>
                <td style={{ fontSize: "12px" }} className="mr-5">
                  <i
                    class={[`fas`, `fa-check`, classes.checkMark].join(" ")}
                  ></i>
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
                      Print
                    </label>
                    <label
                      className={[
                        `text-center`,
                        `noMarginBottom`,
                        classes.tableCancelButton,
                      ].join(" ")}
                    >
                      Delete
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

export default Invoices;
