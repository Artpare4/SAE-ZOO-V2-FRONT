import React from "react";
import PropTypes from "prop-types";
import FamilleAnimalCard from "./familleAnimal/FamilleAnimalCard.jsx";
import ZoneParcCard from "./zoneParc/ZoneParcCard.jsx";
import EventCard from "./event/EventCard.jsx";

function CardList({ data = {}, type, ...props }) {
  if (type === "familleAnimal") {
    return (
      <div className="w-full bg-background-200 pt-12 pb-36">
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-5 w-[90%] lg:w-[70%] m-auto">
          {data.map((value) => (
            <FamilleAnimalCard data={value} />
          ))}
        </div>
      </div>
    );
  }
  if (type === "zoneParc") {
    return (
      <div className="grid grid-cols-2">
        {data.map((value) => (
          <ZoneParcCard data={value} />
        ))}
      </div>
    );
  }
  if (type === "events") {
    return (
      <div className="grid grid-cols-6 w-full bg-background-200 pt-12 pb-36">
        <div className="flex flex-col col-start-1 col-end-7 lg:col-start-2 lg:col-end-6">
          {data.map((value) => (
            <EventCard data={value} />
          ))}
        </div>
      </div>
    );
  }
}

CardList.PropTypes = {
  data: PropTypes.array,
  type: PropTypes.string,
};
export default CardList;
