import React from "react";
import classes from "./ChatScreen.module.css";

const ChatScreen = () => {
  return (
    <div className="pt-3 pb-3">
      <div className="d-flex flex-column">
        <div className="d-flex align-items-center">
          <img
            alt="avatar"
            src="assets/img/messages/user1.png"
            className={[`mr-3`, classes.userAvatar].join(" ")}
          />
          <label
            className={[`noMarginBottom`, classes.userNameTitle].join(" ")}
          >
            Francesca Metts
          </label>
        </div>
        <p className={[`noMarginBotttom`, classes.userMessage].join(" ")}>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout.
        </p>
      </div>
      <div className="d-flex flex-column align-items-end">
        <div className="d-flex align-items-center">
          <img
            alt="avatar"
            src="assets/img/messages/user2.png"
            className={[`mr-3`, classes.userAvatar].join(" ")}
          />
          <label
            className={[`noMarginBottom`, classes.userNameTitle].join(" ")}
          >
            Miroslav M
          </label>
        </div>
        <p
          className={[
            `noMarginBotttom`,
            `text-right`,
            classes.senderMessage,
          ].join(" ")}
        >
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it
        </p>
      </div>
      <div className="d-flex flex-column">
        <div className="d-flex align-items-center">
          <img
            alt="avatar"
            src="assets/img/messages/user1.png"
            className={[`mr-3`, classes.userAvatar].join(" ")}
          />
          <label
            className={[`noMarginBottom`, classes.userNameTitle].join(" ")}
          >
            Francesca Metts
          </label>
        </div>
        <p className={[`noMarginBotttom`, classes.userMessage].join(" ")}>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout.
        </p>
      </div>
      <div className="d-flex flex-column align-items-end">
        <div className="d-flex align-items-center">
          <img
            alt="avatar"
            src="assets/img/messages/user2.png"
            className={[`mr-3`, classes.userAvatar].join(" ")}
          />
          <label
            className={[`noMarginBottom`, classes.userNameTitle].join(" ")}
          >
            Miroslav M
          </label>
        </div>
        <p
          className={[
            `noMarginBotttom`,
            `text-right`,
            classes.senderMessage,
          ].join(" ")}
        >
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it
        </p>
      </div>
      <div className="d-flex flex-column">
        <div className="d-flex align-items-center">
          <img
            alt="avatar"
            src="assets/img/messages/user1.png"
            className={[`mr-3`, classes.userAvatar].join(" ")}
          />
          <label
            className={[`noMarginBottom`, classes.userNameTitle].join(" ")}
          >
            Francesca Metts
          </label>
        </div>
        <p className={[`noMarginBotttom`, classes.userMessage].join(" ")}>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout.
        </p>
      </div>
      <div>
        <form>
          <div className={[`d-flex`, classes.sendMessageDiv].join(" ")}>
            <input
              type="text"
              placeholder="Type your message"
              className={classes.messageBoxField}
            />
            <button className={classes.sendButton} type="button">
              <img src="assets/img/messages/sendBtn.png" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ChatScreen;
