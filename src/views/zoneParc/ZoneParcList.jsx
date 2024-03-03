import React, { useEffect, useState } from "react";
import { fetchAllZoneParc } from "../../services/api/dataFetch.js";
import CardList from "../../components/CardList.jsx";

function ZoneParcList() {
  const [zones, setZones] = useState([]);
  useEffect(() => {
    fetchAllZoneParc().then((values) => {
      setZones(values["hydra:member"]);
    });
  }, []);
  return (
    <div className="flex flex-col mt-36 lg:mt-24 w-[70%] m-auto pb-36">
      <h1 className="text-center text-secondary-800 text-5xl md:text-5xl  lg:text-6xl lg:text-10xl mb-5">
        Les zones du parc
      </h1>
      <CardList data={zones} type="zoneParc" />
    </div>
  );
}

export default ZoneParcList;
