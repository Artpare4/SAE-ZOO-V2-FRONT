import React from "react";
import { Link } from "wouter";
import { CrudUrl } from "../../services/api/dataFetch.js";

function AdminCard() {
  return (
    <>
      <p className="text-4xl lg:text-2xl px-2 text-center">
        Compte administrateur
      </p>
      <Link href={CrudUrl}>Accédez au back-office</Link>
    </>
  );
}

export default AdminCard;
