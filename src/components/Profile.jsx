import React from "react";

function Profile(props) {
  const { index } = props;
  return (
    <div className="profileDetails">
      <img src={index.profileImage} alt={"Profile pic of" + index.firstName} />
      <div>
        {index.firstName} {index.lastName}
        <br />
        Email: {index.email}
        <br />
        Phone: {index.phone}
        <br />
        Address: {index.address.city}, {index.address.country}
      </div>
    </div>
  );
}

export default Profile;
