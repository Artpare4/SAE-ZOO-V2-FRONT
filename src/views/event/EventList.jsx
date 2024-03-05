import React, { useEffect, useState } from "react";
import { fetchAllEvent } from "../../services/api/dataFetch.js";
import CardList from "../../components/CardList.jsx";

function EventList() {
  const [events, setEvents] = useState([]);
  useEffect(() => {
    fetchAllEvent().then((value) => {
      setEvents(value["hydra:member"]);
    });
  }, []);
  return (
    <>
      <h1 className="text-center text-8xl lg:text-6xl mt-36 lg:mt-24 mb-5 text-secondary-800">
        Liste des évenements
      </h1>
      <CardList type="events" data={events} />
    </>
  );
}

export default EventList;
