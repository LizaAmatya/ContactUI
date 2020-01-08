import React from "react";

function List(props) {
  const { username, userlastname, profilepic, onContactClick, index } = props;
  return (
    <li className="userList" onClick={e => onContactClick(index)}>
      <img
        className="profilePic"
        src={profilepic}
        alt={"Profile pic of" + username}
      />
      <span className="userName">
        {username} {userlastname}
      </span>
    </li>
  );
}

export default List;
