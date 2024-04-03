import React from "react";
import { Link } from "wouter";
import { CrudUrl } from "../../services/api/dataFetch.js";

function AdminCard() {
  return (
    <>
      <p className="text-4xl lg:text-2xl px-2 text-center">
        Compte administrateur
      </p>
      <a className="text-center bg-primary-500  mr-2 rounded-2xl p-2 text-4xl lg:text-2xl" href={CrudUrl()}>Accédez au back-office</a>
    </>
  );
}

export default AdminCard;
