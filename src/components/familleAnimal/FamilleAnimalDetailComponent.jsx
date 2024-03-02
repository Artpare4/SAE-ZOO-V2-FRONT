import React from "react";
import PropTypes from "prop-types";
import { ImageElmt } from "../../services/api/dataFetch.js";

function FamilleAnimalDetailComponent({ data = {}, ...props }) {
  console.log(data);
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
            <p className="text-primary-100 text-2xl lg:text-xl text-center font-bold">
              Espèce
            </p>
            {Object.prototype.hasOwnProperty.call(data, "espece") ? (
              <p className="text-primary-100 text-2xl lg:text-xl text-center">
                {data.espece.libEspece}
              </p>
            ) : (
              <p className="text-primary-100 text-2xl lg:text-xl text-center">
                Non renseigné
              </p>
            )}
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
            <p className="text-primary-100 text-2xl lg:text-xl text-center font-bold">
              Habitat
            </p>
            <p className="text-primary-100 text-2xl lg:text-xl text-center">
              {Object.prototype.hasOwnProperty.call(
                data,
                "assoHabitatFamilleAnimals",
              ) && data.assoHabitatFamilleAnimals.length !== 0
                ? data.assoHabitatFamilleAnimals.map(
                    (values) => values.habitat.libHabitat,
                  )
                : "Non renseigné"}
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
      <div className="pt-12 bg-background-200 pb-36">
        <h2 className="text-center text-secondary-800 text-2xl md:text-4xl  lg:text-5xl mb-5 mt-5 ">
          Les animaux
        </h2>
        <div className="grid grid-cols-2">
          {Object.prototype.hasOwnProperty.call(data, "animals") &&
          data.animals.length !== 0 ? (
            data.animals.map((values) => (
              <div className="flex flex-row m-2 p-2 bg-secondary-800/70 rounded-2xl text-text-50 backdrop-filter backdrop-blur-sm border border-secondary-50 border-s">
                <img
                  className="w-96  bg-secondary-800/60 backdrop-filter backdrop-blur-sm border border-secondary-50 border-s p-2 rounded-2xl"
                  src={ImageElmt(`animals/${values.id}`)}
                  alt={`Image de ${values.nomAnimal}`}
                />
                <div className="flex  flex-col justify-center ml-3 w-[100%]">
                  <p className="text-center text-primary-100 text-4xl lg:text-10xl">
                    {values.nomAnimal}
                  </p>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-xl">Pas d'animaux renseigné</p>
          )}
        </div>
      </div>
    </div>
  );
}

FamilleAnimalDetailComponent.PropTypes = {
  data: PropTypes.array,
};
export default FamilleAnimalDetailComponent;
