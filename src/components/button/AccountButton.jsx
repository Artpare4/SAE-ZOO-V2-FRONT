import React, { useContext } from "react";
import { userContext } from "../../contexts/user/index.js";
import { loginUrl } from "../../services/api/dataFetch.js";

function AccountButton() {
  const user = useContext(userContext);
  let url = "";
  let titleBtn = "";
  if (user !== null && user !== undefined) {
    url = "/user";
    titleBtn = "Mon Compte";
  } else {
    url = loginUrl();
    titleBtn = "Connexion";
  }
  return (
    <a
      href={url}
      className="mt-3 p-4 bg-secondary-800/50  text-text-50 rounded-2xl bg-clip-padding  backdrop-filter backdrop-blur-sm border border-secondary-50 border-s"
    >
      {titleBtn}
    </a>
  );
}

export default AccountButton;
