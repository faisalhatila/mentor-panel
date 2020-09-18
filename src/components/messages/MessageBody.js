import React from "react";
import ChatScreen from "./ChatScreen";
import classes from "./MessageBody.module.css";
import UsersList from "./UsersList";
const MessageBody = () => {
  return (
    <div className={[`row`, `whiteBack`, classes.chatScreenMainDiv].join(" ")}>
      <div className="col-4">
        <UsersList />
      </div>
      <div className="col-8">
        <ChatScreen />
      </div>
    </div>
  );
};

export default MessageBody;
