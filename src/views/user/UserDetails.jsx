import React, { useContext } from "react";
import { userContext } from "../../contexts/user/index.js";
import UserDetailsComponent from "../../components/user/UserDetailsComponent.jsx";

function UserDetails() {
  const user = useContext(userContext);
  return <UserDetailsComponent data={user} />;
}

export default UserDetails;
