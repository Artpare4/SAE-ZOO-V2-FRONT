import React from "react";
import { logoutUrl } from "../../services/api/dataFetch.js";

function LogoutButton() {
  return (
    <a
      className="bg-primary-500/70 text-4xl lg:text-2xl rounded-xl p-2 border border-primary-50 border-sbg-primary-500 text-text-950 mr-2"
      href={logoutUrl()}
    >
      Déconnexion
    </a>
  );
}

export default LogoutButton;
