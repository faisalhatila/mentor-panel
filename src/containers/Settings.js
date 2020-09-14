import React from "react";
import Invoices from "../components/dashboard/Invoices";
import TopCard from "../components/dashboard/TopCard";
import UpComingWebinars from "../components/dashboard/UpComingWebinars";
import LeftMenu from "../components/LeftMenu";
import GeneraLSettingsForm from "../components/settings/GeneraLSettingsForm";
import PaymentGateway from "../components/settings/PaymentGateway";
import TabNav from "../components/settings/TabNav";

const Settings = () => {
  return (
    <div className="home-container row contentContainer">
      <div className="col" style={{ flex: 1 }}>
        <LeftMenu />
      </div>
      <div className="col" style={{ flex: 3 }}>
        <div className="mt-5 pr-4 pl-4 pb-4 contentBack pt-3">
          <TabNav />
          <div className="mt-5">
            <h3 className="noMarginBottom">General Settings</h3>
            <h3 className="noMarginBottom">
              Dashboard / Setting / General Settings
            </h3>
          </div>
          <div className="mt-4">
            <GeneraLSettingsForm />
          </div>
          {/* <div className="mt-4">
            <PaymentGateway />
          </div> */}

          {/* <div className="row justify-content-between mt-4">
            {[...Array(3)].map((i) => {
              return <TopCard />;
            })}
          </div> */}
          {/* <div className="mt-4">
            <Invoices />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Settings;
