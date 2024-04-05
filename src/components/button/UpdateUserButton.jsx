import React from "react";
import { updateUserUrl } from "../../services/api/dataFetch.js";

function UpdateUserButton() {
  return (
    <a
      className="bg-primary-500/70 text-4xl lg:text-2xl rounded-xl p-2 border border-primary-50 border-s text-text-950 mr-2"
      href={updateUserUrl()}
    >
      Modifiez votre compte
    </a>
  );
}
export default UpdateUserButton;
