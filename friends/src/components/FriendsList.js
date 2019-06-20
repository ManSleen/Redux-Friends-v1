import React from "react";
import Friend from "./Friend";

const FriendsList = props => {
  console.log(props);
  return (
    <ul>
      {props.friends.map(friend => (
        <Friend key={friend.name} friend={friend} />
      ))}
    </ul>
  );
};

export default FriendsList;
