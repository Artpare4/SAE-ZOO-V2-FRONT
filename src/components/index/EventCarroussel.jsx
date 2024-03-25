import PropTypes from "prop-types";
import Card from "./Card.jsx";
import {useState} from "react";
import {ImageElmt} from "../../services/api/dataFetch.js";

function EventCarroussel({data})
{
  return (
    <div className="flex px-3 flex-row gap-6">
      {data.map((cardData, index) => {
        return <Card title={cardData.nomEvent}
                     description={cardData.description.length > 100
                       ? cardData.description.substring(0, 100)+"..."
                       : cardData.description}
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