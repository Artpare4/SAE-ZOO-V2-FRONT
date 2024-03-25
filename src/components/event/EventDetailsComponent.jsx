import React from "react";
import PropTypes from "prop-types";

import { ImageElmt } from "../../services/api/dataFetch.js";

function EventDetailsComponent({ data = {}, ...props }) {
  return (
    <div className="flex flex-col">
      <h1 className="text-center text-3xl md:text-5xl  lg:text-6xl mt-36 lg:mt-24 lg:mb-5 lg:text-10xl text-secondary-800">
        {data.nomEvent}
      </h1>
      <div className="flex flex-col  justify-center pb-20">
        <div className="lg:flex lg:flex-row">
          <div className="flex justify-center p-4">
            <img
              className="w-96 h-fit rounded-2xl p-2"
              src={ImageElmt(`events/${data.id}`)}
              alt="Image de l'événement"
            />
          </div>
          <div className="m-4 lg:w-1/2 flex content-center">
            <p className="text-secondary-800 text-lg">{data.description}</p>
          </div>
        </div>
      </div>
      <div className="xl:flex xl:justify-center pt-12 bg-background-200 pb-36">
        <div className="xl:flex xl:flex-row xl:w-1/2 ">
          <div className="flex flex-col xl:m-10">
            <h2 className="border-b-2 text-3xl text-secondary-800">
              Informations complémentaires:
            </h2>
            <p className="text-secondary-800 text-lg mt-3">
              Nombre de places : {data.nbPlaces} personnes
            </p>
          </div>
          <div className="flex flex-col mt-10 xl:m-10">
            <h2 className="border-b-2 text-3xl text-secondary-800 ">
              Les dates prochaines:{" "}
            </h2>

            {Object.prototype.hasOwnProperty.call(data, "datesEvent") &&
            data.datesEvent.length !== 0 ? (
              data.datesEvent.map((values) => (
                <div className="flex flex-row m-2 bg-secondary-800/60 p-3 w-fit rounded-2xl">
                  <p className="text-center mr-4">
                    {values.dateEvent.dateEvent.substring(0, 10)}
                  </p>
                </div>
              ))
            ) : (
              <p>Pas de dates prévu pour l'instant</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventDetailsComponent;

EventDetailsComponent.PropTypes = {
  data: PropTypes.array,
};
