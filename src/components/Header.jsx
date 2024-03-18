import React, { useContext } from "react";
// eslint-disable-next-line import/extensions
import { loginUrl } from "../services/api/dataFetch.js";
import { userContext } from "../contexts/user/index.js";

function Header() {
  const user = useContext(userContext);
  let url = "";
  if (user != null && user !== undefined) {
    url = "/user";
  } else {
    url = loginUrl();
  }
  return (
    <header
      id="header"
      className="fixed flex justify-evenly z-10 w-full text-text-50 top-0"
    >
      <div className="bg-secondary-800/50 w-full absolute h-24 lg:h-12 z-[-1] bg-clip-padding  backdrop-filter backdrop-blur-sm border-b border-secondary-50 border-s" />

      <div className="btn-container flex justify-between gap-6">
        <a
          href="/"
          className="mt-3 p-4 bg-secondary-800/50  text-text-50 rounded-2xl bg-clip-padding  backdrop-filter backdrop-blur-sm border border-secondary-50 border-s"
        >
          Découvrir le parc
        </a>
        <a
          href="/events"
          className="mt-3 p-4 bg-secondary-800/50  text-text-50 rounded-2xl bg-clip-padding  backdrop-filter backdrop-blur-sm border border-secondary-50 border-s"
        >
          Évènements
        </a>
        <a
          href="/familles"
          className="mt-3 p-4 bg-secondary-800/50  text-text-50 rounded-2xl bg-clip-padding  backdrop-filter backdrop-blur-sm border border-secondary-50 border-s"
        >
          Nos animaux
        </a>
      </div>
      <a href="/" className="logo h-20 lg:h-10 pt-1">
        <img
          className="h-20 lg:h-10 pt-1"
          src="../assets/LogoZoo.png"
          alt="Logo du Zoo Parc de Laval"
        />
      </a>
      <div className="btn-container flex justify-between gap-6">
        <a
          href="/zones"
          className="mt-3 p-4 bg-secondary-800/50  text-text-50 rounded-2xl bg-clip-padding  backdrop-filter backdrop-blur-sm border border-secondary-50 border-s"
        >
          Nos espaces
        </a>
        <a
          href={url}
          className="mt-3 p-4 bg-secondary-800/50  text-text-50 rounded-2xl bg-clip-padding  backdrop-filter backdrop-blur-sm border border-secondary-50 border-s"
        >
          Votre compte
        </a>
        <a
          href="/reservation"
          className="mt-3 p-4 bg-primary-500/50 text-text-50 rounded-2xl bg-clip-padding  backdrop-filter backdrop-blur-sm border border-secondary-50 border-s"
        >
          Réservez vos billets
        </a>
      </div>
    </header>
  );
}
export default Header;
