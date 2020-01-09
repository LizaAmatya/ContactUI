import React from "react";

function Profile(props) {
  const { index } = props;
  return (
    <div className="profileDetails">
      <div className="profile-top">
        <div
          className="bcg"
          style={{ backgroundImage: `url(${index.profileImage})` }}
        ></div>
        <div className="profileImage-container">
          <img
            className="profileImage"
            src={index.profileImage}
            alt={"Profile pic of" + index.firstName}
          />
        </div>
      </div>

      <div className="info">
        <span>
          {index.firstName} {index.lastName}
        </span>
        <br />
        <span>Email: {index.email}</span>
        <br />
        <span>Phone: {index.phone}</span>
        <br />
        <span>
          Address: {index.address.city}, {index.address.country}
        </span>
      </div>
    </div>
  );
}

export default Profile;
