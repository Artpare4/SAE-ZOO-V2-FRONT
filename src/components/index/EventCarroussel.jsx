import PropTypes from "prop-types";
import {ImageElmt} from "../../services/api/dataFetch.js";
import EventCard from "./EventCard.jsx";
import React from "react";


function EventCarroussel({data})
{
  return (
    <div className="flex px-3 flex-row gap-6">
      {data.map((cardData, index) => {
        return <EventCard title={cardData.nomEvent}
                     description={cardData.description.length > 100
                       ? cardData.description.substring(0, 100)+"..."
                       : cardData.description}
                        id={cardData.id}
                     image={ImageElmt("events/"+cardData.id)}
                     key={index}/>
      })}
    </div>
    );
}

EventCarroussel.propTypes = {
  data: PropTypes.array.isRequired
}
EventCarroussel.defaultProps = {
  data: []
}

export default EventCarroussel;