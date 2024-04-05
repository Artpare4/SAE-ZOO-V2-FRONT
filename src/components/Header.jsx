import React, {useEffect, useState} from "react";
import AccountButton from "./button/AccountButton.jsx";
import { reservationUrl } from "../services/api/dataFetch";

function Header() {
  let mobileHeader =  (
    <header id="header" className="fixed flex justify-between z-10 w-full text-text-50 top-0">
        <div className="bg-secondary-800/50 w-full absolute h-24 lg:h-12 z-[-1] bg-clip-padding  backdrop-filter backdrop-blur-sm border-b border-secondary-50 border-s"></div>
          <div className="my-auto pt-2 h-20 w-20"></div>
              <a href="/" className="logo h-20 lg:h-10 pt-1">
                <img className="h-20 lg:h-10 pt-1" src="/LogoZoo.png" alt="Logo du Zoo Parc de Laval"/>
              </a>
                <svg id="burger" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="my-auto pt-2 h-20 w-20 cursor-pointer"
                onClick={() => {
                  document.getElementById("headerButtons").classList.toggle("hidden");
                }}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"></path>
                </svg>
                <div id="headerButtons" className="btn-container flex flex-col justify-between absolute top-24 w-full text-4xl hidden">
                    <a href="/" className="p-3 bg-secondary-800/50  bg-clip-padding  backdrop-filter backdrop-blur-sm border border-secondary-50 border-s">Découvrir le parc</a>
                  <a href="/events" className="p-3 bg-secondary-800/50  bg-clip-padding  backdrop-filter backdrop-blur-sm border border-secondary-50 border-s">Évènements</a>
                  <a href="/familles" className="p-3 bg-secondary-800/50  bg-clip-padding  backdrop-filter backdrop-blur-sm border border-secondary-50 border-s">Nos animaux</a>
                  <a href="/zones" className="p-3 bg-secondary-800/50  bg-clip-padding  backdrop-filter backdrop-blur-sm border border-secondary-50 border-s">Nos espaces</a>
                  <AccountButton />
                  <a href={reservationUrl()} className="p-3 bg-primary-500/50 bg-clip-padding  backdrop-filter backdrop-blur-sm border border-secondary-50 border-s">Réservez vos billets</a>
                </div>
      </header>);

  let desktopHeader = (
    <header id="header" className="fixed flex justify-evenly z-10 w-full text-text-50 top-0">
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
          src="/LogoZoo.png"
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
        <AccountButton />
        <a
          href={reservationUrl()}
          className="mt-3 p-4 bg-primary-500/50 text-text-50 rounded-2xl bg-clip-padding  backdrop-filter backdrop-blur-sm border border-secondary-50 border-s"
        >
          Réservez vos billets
        </a>
      </div>
    </header>);

  const [header, setHeader] = useState(
    window.innerWidth > 1024 ? desktopHeader : mobileHeader,
  );

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth > 1024) {
        setHeader(desktopHeader);
      } else {
        setHeader(mobileHeader);
      }
    }

    // Call handleResize once to set the initial state
    handleResize();

    // Add the event listener for window resizing
    window.addEventListener("resize", handleResize);

    // Cleanup function to remove the event listener
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty dependency array means this effect runs once on mount and cleanup on unmount


  return header;
}

export default Header;
