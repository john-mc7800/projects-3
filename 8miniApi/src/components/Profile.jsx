import React, { useContext } from "react";
import UserContext from "../context/UserContext";

function Profile() {
  const { user } = useContext(UserContext);

  if (!user) return <div>please login</div>;

  return (
    <>
      <div>Welcome {user.username}</div>
      <div>Welcome {user.data}</div>
      console.log({user.data});
    </>
  );
}

export default Profile;
