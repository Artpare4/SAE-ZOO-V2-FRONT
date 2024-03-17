import React, { useContext } from "react";
import { userContext } from "../../contexts/user/index.js";

function UserDetails() {
  const user = useContext(userContext);
}

export default UserDetails;
