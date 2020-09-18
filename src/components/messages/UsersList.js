import React from "react";
import SearchUser from "./SearchUser";
import classes from "./UsersList.module.css";

const UsersList = () => {
  const usersList = [
    {
      id: 0,
      name: "Francesca Metts",
      isUnreadMessages: true,
      noOfUnreadMessages: 3,
      isOnline: true,
      isAway: false,
      avatar: "assets/img/messages/user1.png",
    },
    {
      id: 1,
      name: "Malcolm Quaday",
      isUnreadMessages: true,
      noOfUnreadMessages: 5,
      isOnline: true,
      isAway: false,
      avatar: "assets/img/messages/user2.png",
    },
    {
      id: 2,
      name: "Lindsey Rivard",
      isUnreadMessages: false,
      noOfUnreadMessages: null,
      isOnline: true,
      isAway: false,
      avatar: "assets/img/messages/user3.png",
    },
    {
      id: 3,
      name: "Elizabeth Hurton",
      isUnreadMessages: true,
      noOfUnreadMessages: 1,
      isOnline: false,
      isAway: null,
      avatar: "assets/img/messages/user4.png",
    },
    {
      id: 4,
      name: "Albert Pollock",
      isUnreadMessages: false,
      noOfUnreadMessages: null,
      isOnline: true,
      isAway: true,
      avatar: "assets/img/messages/user5.png",
    },
    {
      id: 5,
      name: "Francesca Metts",
      isUnreadMessages: true,
      noOfUnreadMessages: 2,
      isOnline: true,
      isAway: true,
      avatar: "assets/img/messages/user6.png",
    },
    {
      id: 6,
      name: "Malcolm Quaday",
      isUnreadMessages: false,
      noOfUnreadMessages: null,
      isOnline: false,
      isAway: null,
      avatar: "assets/img/messages/user7.png",
    },
    {
      id: 7,
      name: "Francesca Metts",
      isUnreadMessages: true,
      noOfUnreadMessages: 3,
      isOnline: true,
      isAway: false,
      avatar: "assets/img/messages/user1.png",
    },
    {
      id: 8,
      name: "Malcolm Quaday",
      isUnreadMessages: true,
      noOfUnreadMessages: 5,
      isOnline: true,
      isAway: false,
      avatar: "assets/img/messages/user2.png",
    },
    {
      id: 9,
      name: "Lindsey Rivard",
      isUnreadMessages: false,
      noOfUnreadMessages: null,
      isOnline: true,
      isAway: false,
      avatar: "assets/img/messages/user3.png",
    },
    {
      id: 10,
      name: "Elizabeth Hurton",
      isUnreadMessages: true,
      noOfUnreadMessages: 1,
      isOnline: false,
      isAway: null,
      avatar: "assets/img/messages/user4.png",
    },
    {
      id: 11,
      name: "Albert Pollock",
      isUnreadMessages: false,
      noOfUnreadMessages: null,
      isOnline: true,
      isAway: true,
      avatar: "assets/img/messages/user5.png",
    },
    {
      id: 12,
      name: "Francesca Metts",
      isUnreadMessages: true,
      noOfUnreadMessages: 2,
      isOnline: true,
      isAway: true,
      avatar: "assets/img/messages/user6.png",
    },
    {
      id: 13,
      name: "Malcolm Quaday",
      isUnreadMessages: false,
      noOfUnreadMessages: null,
      isOnline: false,
      isAway: null,
      avatar: "assets/img/messages/user7.png",
    },
  ];
  return (
    <div className={[`col`, `pt-4`, classes.usersListMainDiv].join(" ")}>
      <SearchUser />
      {usersList.map((user, i) => {
        return (
          <div
            key={i}
            className={[
              `d-flex`,
              `align-items-center`,
              `justify-content-between`,
              `mt-3`,
              classes.userListItemMainDiv,
            ].join(" ")}
          >
            <div className={[`d-flex`, classes.avatarDiv].join(" ")}>
              <div
                className={
                  user.isOnline && !user.isAway
                    ? classes.activeStatusBulb
                    : user.isOnline && user.isAway
                    ? classes.awayStatusBulb
                    : classes.offlineStatusBulb
                }
              ></div>
              <img alt="avatar" src={user.avatar} className={classes.avatar} />
            </div>
            <div className={classes.userNameDiv}>
              <label className={[`noMarginBottom`, classes.userName].join(" ")}>
                {user.name}
              </label>
            </div>
            {user.isUnreadMessages ? (
              <div className={classes.unreadMessageDiv}>
                <label
                  className={[
                    `noMarginBottom`,
                    `text-center`,
                    classes.unreadMessage,
                  ].join(" ")}
                >
                  {user.noOfUnreadMessages}
                </label>
              </div>
            ) : (
              <span></span>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default UsersList;
