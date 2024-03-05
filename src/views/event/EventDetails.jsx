import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { fetchEventDetail } from "../../services/api/dataFetch.js";
import EventDetailsComponent from "../../components/event/EventDetailsComponent.jsx";

function EventDetails({ id, ...props }) {
  const [event, setEvent] = useState({});
  useEffect(() => {
    fetchEventDetail(id).then((value) => {
      setEvent(value);
    });
  }, []);
  return <EventDetailsComponent data={event} />;
}

export default EventDetails;

EventDetails.PropTypes = {
  id: PropTypes.number,
};
