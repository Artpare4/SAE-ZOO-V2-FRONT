import React, { useEffect, useState } from "react";
import { fetchAllZoneParc } from "../../services/api/dataFetch.js";
import CardList from "../../components/CardList.jsx";
import paginationFromHydraView from "../../services/transformers/paginationFromHydraView.js";
import Pagination from "../../components/Pagination.jsx";

function ZoneParcList() {
  const [page, setPage] = useState(1);
  const [zones, setZones] = useState([]);
  const [pagination, setPagination] = useState([]);
  const urlParam = new URLSearchParams();

  useEffect(() => {
    urlParam.append("page", page);
    fetchAllZoneParc(urlParam).then((values) => {
      setZones(values["hydra:member"]);
      setPagination(paginationFromHydraView(values["hydra:view"]));
    });
  }, [page]);
  return (
    <div className="flex flex-col mt-36 lg:mt-24 w-[70%] m-auto pb-36">
      <h1 className="text-center text-secondary-800 text-5xl md:text-5xl  lg:text-6xl lg:text-10xl mb-5">
        Les zones du parc
      </h1>
      <Pagination setPage={setPage} pagination={pagination} />
      <CardList data={zones} type="zoneParc" />
    </div>
  );
}

export default ZoneParcList;
