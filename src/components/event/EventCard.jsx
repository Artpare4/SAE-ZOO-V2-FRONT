import React from "react";
import PropTypes from "prop-types";
import { ImageElmt } from "../../services/api/dataFetch.js";

function EventCard({ data = {}, ...props }) {
  return (
    <div className="flex flex-row m-2 p-2 bg-secondary-800/70 rounded-2xl text-text-50 backdrop-filter backdrop-blur-sm border border-secondary-50 border-s">
      <img
        className="object-contain"
        src={ImageElmt(`events/${data.id}`)}
        alt="Image de {{ event.nomEvent }}"
      />
      <div className=" pl-4 flex flex-col grow">
        <p className="eventName text-primary-50 text-6xl lg:text-4xl ">
          {data.nomEvent}
        </p>
        <p className="text-primary-200 text-2xl lg:text-xl">
          Nombre de places : {data.nbPlaces}
        </p>
        <p className="text-primary-50 text-2xl lg:text-xl">
          {data.description}
        </p>
      </div>
    </div>
  );
}

export default EventCard;

EventCard.PropTypes = {
  data: PropTypes.array,
};
