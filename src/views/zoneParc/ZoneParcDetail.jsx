import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { fetchZoneParcDetail } from "../../services/api/dataFetch.js";
import ZoneParcDetailComponent from "../../components/zoneParc/ZoneParcDetailComponent.jsx";

function ZoneParcDetail({ id, ...props }) {
  const [zone, setZone] = useState({});
  useEffect(() => {
    fetchZoneParcDetail(id).then((data) => {
      setZone(data);
    });
  }, []);
  return (
    <div className="flex flex-col content-center grow mt-36 lg:mt-24 ">
      <ZoneParcDetailComponent data={zone} />
    </div>
  );
}

export default ZoneParcDetail;

ZoneParcDetail.PropTypes = {
  id: PropTypes.number,
};
