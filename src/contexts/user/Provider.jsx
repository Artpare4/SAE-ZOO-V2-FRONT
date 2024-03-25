import React, { useEffect, useState } from "react";
import { userContext } from "./index.js";
import { getMe } from "../../services/api/dataFetch.js";
import PropTypes from "prop-types";

function Provider({ children }) {
  const [userData, setData] = useState();
  useEffect(() => {
    getMe().then((response) => {
      if (response) setData(response);
      else setData(null);
    });
  }, []);
  return (
    <userContext.Provider value={userData}>{children}</userContext.Provider>
  );
}
Provider.PropTypes = {
  children: PropTypes.node,
};

export default Provider;
