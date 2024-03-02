import React from "react";
import PropTypes from "prop-types";
import { Link } from "wouter";
import { ImageElmt } from "../../services/api/dataFetch.js";

function FamilleAnimalCard({ data = {}, ...props }) {
  const lien = `/familles/${data.id}`;
  return (
    <Link href={lien}>
      <div className="flex flex-col bg-secondary-800/60 backdrop-filter backdrop-blur-sm border border-secondary-50 border-s rounded-3xl ">
        <div className="bg-secondary-800/60 backdrop-filter backdrop-blur-sm border border-secondary-50 border-s p-2 rounded-2xl">
          <img
            className="w-[100%] rounded-2xl"
            src={ImageElmt(`famille_animals/${data.id}`)}
            alt="Image de "
          />
        </div>
        <div>
          <p className="nameAnimal text-center text-4xl lg:text-2xl text-text-50">
            {data.nomFamilleAnimal}
          </p>
          <p className="text-center text-xl lg:text-md italic text-text-200/50">
            {data.nomScientifique}
          </p>
        </div>
      </div>
    </Link>
  );
}

FamilleAnimalCard.PropTypes = {
  data: PropTypes.array,
};
export default FamilleAnimalCard;
