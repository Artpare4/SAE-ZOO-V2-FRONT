import React from "react";
import { Link } from "wouter";
import { reservationUrl } from "../../services/api/dataFetch";

function IndexCard() {
  return (
    <>
      <p className="text-4xl lg:text-2xl text-justify px-2">
        Découvrez le Zoo Parc de Laval, un joyau de la biodiversité en plein
        cœur de la Mayenne. Rencontrez des animaux fascinants, vivez des moments
        uniques en famille et explorez la beauté de la nature. Une aventure
        inoubliable vous attend&nbsp;!
      </p>
      <a
        className="text-center bg-primary-500  mr-2 rounded-2xl p-2 text-4xl lg:text-2xl"
        href={reservationUrl()}
      >
        Réservez vos billets
      </a>
    </>
  );
}
export default IndexCard;
