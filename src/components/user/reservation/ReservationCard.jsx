import React from "react";
import ReservationButtons from "./ReservationButtons.jsx";

function ReservationCard({ data = {}, ...props }) {
  return (
    <div className="bg-secondary-800/70 m-2 rounded-xl flex flex-col p-2">
      <div>
        <p className="text-center text-primary-50 text-3xl">
          {data.dateReservation.substring(0, 10)}
        </p>
      </div>
      <div className="m-4 flex justify-between ">
        <p className="text-primary-50 text-2xl ">
          Nb places adultes: {data.nbPlacesAdult}
        </p>
        <p className="text-primary-50 text-2xl"> | </p>
        <p className="text-primary-50 text-2xl ">
          Nb places enfants: {data.nbPlacesChild}
        </p>
      </div>
      <div className="flex justify-between">
        <p className="text-primary-50 text-lg">
          Tarif place adulte: {data.billet.tarifAdult} €
        </p>
        <p className="text-primary-50 text-lg">
          Tarif place enfant: {data.billet.tarifChild} €
        </p>
      </div>
      <div className="">
        <p className="text-primary-50 text-2xl text-center">
          Prix total:
          {data.billet.tarifChild * data.nbPlacesAdult +
            data.nbPlacesChild * data.billet.tarifChild}
          €
        </p>
      </div>
      <ReservationButtons id={data["@id"].split("/")[3]} />
    </div>
  );
}

export default ReservationCard;
