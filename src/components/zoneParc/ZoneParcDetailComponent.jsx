import React from "react";
import PropTypes from "prop-types";
import { ImageElmt } from "../../services/api/dataFetch.js";
import CardList from "../CardList.jsx";

function ZoneParcDetailComponent({ data = {}, ...props }) {
  return (
    <>
      <div className="flex justify-center mb-20">
        <div className="flex flex-col w-1/2 m-3 p-3 rounded-3xl bg-secondary-800/60 backdrop-filter backdrop-blur-sm border border-secondary-50 border-s">
          <h1 className="text-center text-6xl text-text-50 lg:text-4xl m-2">
            {data.libZone}
          </h1>
          <div className="flex justify-center">
            <img
              className="w-[100%] rounded-2xl"
              src={ImageElmt(`zone_parcs/${data.id}`)}
            />
          </div>
        </div>
      </div>
      {Object.prototype.hasOwnProperty.call(data, "familleAnimals") &&
      data.familleAnimals.length !== 0 ? (
        <div className="w-full bg-background-200 pb-36">
          <h1 className="text-center text-6xl lg:text-4xl mb-10 mt-6 text-secondary-800 ">
            Les Animaux que vous pouvez voir:
          </h1>
          <CardList data={data.familleAnimals} type="familleAnimal" />
        </div>
      ) : (
        <p className="text-center text-6xl lg:text-4xl mb-10 mt-6 text-secondary-800">Pas d'animaux dans cette zone</p>
      )}
    </>
  );
}

export default ZoneParcDetailComponent;

ZoneParcDetailComponent.PropTypes = {
  data: PropTypes.array,
};
