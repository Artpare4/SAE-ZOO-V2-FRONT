import React, { useEffect, useState } from "react";
import { fetchAllEvent } from "../../services/api/dataFetch.js";
import CardList from "../../components/CardList.jsx";
import paginationFromHydraView from "../../services/transformers/paginationFromHydraView.js";
import Pagination from "../../components/Pagination.jsx";

function EventList() {
  const [page, setPage] = useState(1);
  const [events, setEvents] = useState([]);
  const [pagination, setPagination] = useState([]);
  const urlParam = new URLSearchParams();
  useEffect(() => {
    urlParam.append("page", page);
    fetchAllEvent(urlParam).then((value) => {
      setEvents(value["hydra:member"]);
      setPagination(paginationFromHydraView(value["hydra:view"]));
    });
  }, [page]);
  return (
    <>
      <h1 className="text-center text-8xl lg:text-6xl mt-36 lg:mt-24 mb-5 text-secondary-800">
        Liste des évenements
      </h1>
      <Pagination setPage={setPage} pagination={pagination} />
      <CardList type="events" data={events} />
    </>
  );
}

export default EventList;
