import React from "react";
import Invoices from "../components/dashboard/Invoices";
import TopCard from "../components/dashboard/TopCard";
import UpComingWebinars from "../components/dashboard/UpComingWebinars";
import LeftMenu from "../components/LeftMenu";
import MessageBody from "../components/messages/MessageBody";

const Messages = () => {
  return (
    <div className="home-container row contentContainer">
      <div className="col" style={{ flex: 1 }}>
        <LeftMenu />
      </div>
      <div className="col" style={{ flex: 3 }}>
        <div className="mt-5 pr-4 pl-4 pb-4 contentBack pt-3">
          <h3 className="noMarginBottom">Message</h3>
          <h3 className="noMarginBottom">Dashboard / Message</h3>
          <div className="mt-4">
            <MessageBody />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Messages;
