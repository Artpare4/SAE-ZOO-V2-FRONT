import React from "react";
import PropTypes from "prop-types";
import UserReservationList from "./reservation/UserReservationList.jsx";
import LogoutButton from "../button/LogoutButton.jsx";

function UserDetailsComponent({ data = {}, ...props }) {
  console.log(data.reservations);
  return (
    <div className="main flex flex-col">
      <h1 className="text-center text-8xl lg:text-6xl mt-10 mb-5 text-secondary-800">
        Votre compte
      </h1>
      <div className="flex justify-center ">
        <div className="p-2 info flex flex-col w-fit rounded-2xl bg-secondary-800/60 backdrop-filter backdrop-blur-sm border border-secondary-50 border-s">
          <div className="flex flex-col content-center mt-4">
            <p className="text-primary-50 text-6xl lg:text-4xl">Nom :</p>
            <p className="text-2xl lg:text-3xl text-secondary-50 p-3 bg-secondary-800/60 backdrop-filter backdrop-blur-sm border border-secondary-50 border-s rounded-2xl">
              {" "}
              {data.nomUser}
            </p>
          </div>

          <div className="flex flex-col content-center mt-4">
            <p className="text-primary-50 text-6xl lg:text-4xl ">Prenom :</p>
            <p className="text-2xl lg:text-3xl text-secondary-50 p-3 bg-secondary-800/60 backdrop-filter backdrop-blur-sm border border-secondary-50 border-s rounded-2xl">
              {" "}
              {data.pnomUser}
            </p>
          </div>

          <div className="flex flex-col content-center mt-4">
            <p className="text-primary-50 text-6xl lg:text-4xl ">Email :</p>
            <p className="text-2xl lg:text-3xl text-secondary-50 p-3 bg-secondary-800/60 backdrop-filter backdrop-blur-sm border border-secondary-50 border-s rounded-2xl">
              {" "}
              {data.email}
            </p>
          </div>

          <div className="flex flex-col content-center mt-4">
            <p className="text-6xl lg:text-4xl text-primary-50 ">
              Numéro de téléphone :
            </p>
            <p className="text-2xl lg:text-3xl text-secondary-50 p-3 bg-secondary-800/60 backdrop-filter backdrop-blur-sm border border-secondary-50 border-s rounded-2xl">
              {data.phoneUser}
            </p>
          </div>
          <div className="flex justify-center mt-5 pb-20">
            <LogoutButton />
          </div>
        </div>
      </div>
      {data.reservations ? (
        <UserReservationList data={data.reservations} />
      ) : (
        <h1 className="text-center text-8xl lg:text-6xl mt-6 lg:mt-24 mb-2 text-secondary-800">
          Vous n'avez pas de réservation
        </h1>
      )}
    </div>
  );
}

export default UserDetailsComponent;

UserDetailsComponent.PropTypes = {
  data: PropTypes.object,
};
