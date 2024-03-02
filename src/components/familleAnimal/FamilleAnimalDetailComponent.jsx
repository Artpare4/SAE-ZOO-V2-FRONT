import React from "react";
import PropTypes from "prop-types";
import { ImageElmt } from "../../services/api/dataFetch.js";

function FamilleAnimalDetailComponent({ data = {}, ...props }) {
  return (
    <div className="mt-36 lg:mt-24 ">
      <h1 className="text-center text-secondary-800 text-5xl md:text-5xl  lg:text-6xl lg:text-10xl mb-5">
        {data.nomFamilleAnimal}
      </h1>
      <div className="flex flex-row p-4 pb-20">
        <div>
          <img
            className="w-[100%] rounded-2xl"
            src={ImageElmt(`famille_animals/${data.id}`)}
            alt={`Image de ${data.nomFamilleAnimal}`}
          />
        </div>
        <div className="flex flex-col justify-evenly ml-2 ">
          <div className="m-2 bg-secondary-800 rounded-xl p-1">
            <p className="text-primary-100 text-2xl lg:text-xl text-center font-bold">
              Nom de la famille
            </p>
            <p className="text-primary-100 text-2xl lg:text-xl text-center">
              {data.nomFamilleAnimal}
            </p>
            <p className="text-primary-100 text-2xl lg:text-xl text-center font-bold">
              Nom scientifique
            </p>
            <p className="text-primary-100 text-2xl lg:text-xl text-center italic">
              {data.nomScientifique}
            </p>
          </div>
          <div className="m-2 bg-secondary-800 rounded-xl p-1">
            <p className="text-primary-100 text-2xl lg:text-xl text-center font-bold">
              Degrée de danger d'extinction
            </p>
            <p className="text-primary-100 text-2xl lg:text-xl text-center">
              {data.dangerExtinction}
            </p>
            <p className="text-primary-100 text-2xl lg:text-xl text-center font-bold">
              Type d'alimentation :
            </p>
            <p className="text-primary-100 text-2xl lg:text-xl text-center">
              {data.typeAlimentation}{" "}
            </p>
          </div>
          <div className="m-2 bg-secondary-800 rounded-xl p-1">
            <p className="text-primary-100 text-2xl lg:text-xl text-center font-bold">
              Description
            </p>
            <p className="text-primary-100 text-2xl lg:text-xl">
              {data.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

FamilleAnimalDetailComponent.PropTypes = {
  data: PropTypes.array,
};
export default FamilleAnimalDetailComponent;
