import React, { useContext } from "react";
import { UserContext } from "./context/UserContext";

const Profile = () => {
  const { user } = useContext(UserContext);
  return (
    <div>
      Welcome {user.username} {user.password}
    </div>
  );
};

export default Profile;
