import React, { useState } from "react";
import { Link } from "react-router-dom";
import { head } from "lodash";
import LeftMenu from "../components/LeftMenu";
import TopCard from "../components/dashboard/TopCard";
import UpComingWebinars from "../components/dashboard/UpComingWebinars";
import Invoices from "../components/dashboard/Invoices";
import InvoiceReportTable from "../components/report/InvoiceReportTable";

const HomeContainer = () => {
  return (
    <div className="home-container row contentContainer">
      <div className="col" style={{ flex: 1 }}>
        <LeftMenu />
      </div>
      <div className="col" style={{ flex: 3 }}>
        <div className="mt-5 pr-4 pl-4 pb-4 contentBack pt-3">
          <h3 className="noMarginBottom">Welcome Mentor</h3>
          <h3 className="noMarginBottom">Dashboard</h3>
          <div className="row justify-content-between mt-4">
            {[...Array(3)].map((i) => {
              return <TopCard />;
            })}
          </div>
          <div className="mt-4">
            <UpComingWebinars />
          </div>
          <div className="mt-4">
            <Invoices />
          </div>
        </div>
      </div>
      {/* <div className="col" style={{ flex: 3 }}>
        <div className="mt-5 pr-4 pl-4 pb-4 contentBack pt-3">
          <h3 className="noMarginBottom">Report</h3>
          <h3 className="noMarginBottom">Dashboard / Invoice Report</h3>
          <div className="mt-4">
            <InvoiceReportTable />
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default HomeContainer;
