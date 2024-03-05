import React from "react";
import PropTypes from "prop-types";
import { ImageElmt } from "../../services/api/dataFetch.js";

function AnimalDetailComponent({ data = {}, ...props }) {
  return (
    <div className="flex-row sm:flex items-center bg-secondary-800/70 rounded-2xl justify-between min-h-[100%] p-6 m-8">
      <div className="h-[70%] md:h-[50%] max-w-[100%] sm:min-w-[30%] md:max-w-[50%]">
        <article className="flex p-6 m-8 ">
          <img
            className="object-contain"
            src={ImageElmt(`animals/${data.id}`)}
            alt={`Image de ${data.nomAnimal}`}
          />
        </article>
      </div>
      <div className="flex flex-col justify-evenly">
        <article className="flex-row items-center bg-secondary-800/70 rounded-2xl min-h-[10%] m-2 p-4">
          Prénom : {data.nomAnimal}
        </article>
        <article className="bg-secondary-800/70 rounded-2xl min-h-[10%] m-2 p-4">
          Poids : {data.poids} kg
        </article>
        <article className="bg-secondary-800/70 rounded-2xl min-h-[10%] m-2 p-4">
          Taille : {data.taille} cm
        </article>
        <article className="flex-row bg-secondary-800/70 rounded-2xl min-h-[10%] m-2 p-4">
          <div>
            Date de Naissance :{" "}
            {Object.prototype.hasOwnProperty.call(data, "dateNaissance")
              ? data.dateNaissance.substring(0, 10)
              : "Non renseigné"}
          </div>
          {Object.prototype.hasOwnProperty.call(data, "dateMort") ? (
            <div>Date Mort :{data.dateMort.substring(0, 10)}</div>
          ) : (
            <div>En vie</div>
          )}
        </article>
        <article className="bg-secondary-800/70 rounded-2xl min-h-[10%] m-2 p-4">
          Caractéristiques : {data.caracteristique}
        </article>
      </div>
    </div>
  );
}

export default AnimalDetailComponent;

AnimalDetailComponent.PropTypes = {
  data: PropTypes.array,
};
