import React from "react";
import PropTypes from "prop-types";

function UserDetailsComponent({ data = {}, ...props }) {
  return (
    <div className="main flex flex-col">
      <h1 className="text-center text-8xl lg:text-6xl mt-36 lg:mt-24 mb-5">
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
        </div>
      </div>
    </div>
  );
}

export default UserDetailsComponent;

UserDetailsComponent.PropTypes = {
  data: PropTypes.object,
};
