import React from "react";
import { Link } from "wouter";

function IndexCard() {
  return (
    <>
      <p className="text-4xl lg:text-2xl text-justify px-2">
        Découvrez le Zoo Parc de Laval, un joyau de la biodiversité en plein
        cœur de la Mayenne. Rencontrez des animaux fascinants, vivez des moments
        uniques en famille et explorez la beauté de la nature. Une aventure
        inoubliable vous attend&nbsp;!
      </p>
      <Link
        className="text-center bg-primary-500  mr-2 rounded-2xl p-2 text-4xl lg:text-2xl"
        href=""
      >
        Réservez vos billets
      </Link>
    </>
  );
}
export default IndexCard;
