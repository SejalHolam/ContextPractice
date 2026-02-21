import React, { useContext } from "react";
import { UserContext } from "./context/UserContext";

const Profile = () => {
  const { user,logout } = useContext(UserContext);

  if(!user) return <div>Please Login</div>
  
  return (
    <div>
      <h2>Welcome {user.username}</h2>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default Profile;
