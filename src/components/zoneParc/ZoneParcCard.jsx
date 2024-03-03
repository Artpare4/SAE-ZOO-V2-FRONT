import React from "react";
import PropTypes from "prop-types";
import {ImageElmt} from "../../services/api/dataFetch.js";

function ZoneParcCard({ data = {}, ...props }) {
  return (
    <div className="zone flex flex-col content-center m-3 rounded-3xl pt-2 pl-2 pr-2 bg-secondary-800/60 backdrop-filter backdrop-blur-sm border border-secondary-50 border-s">
      <div className="bg-secondary-800/60 backdrop-filter backdrop-blur-sm border border-secondary-50 border-s p-2 rounded-2xl">
        <img
          src={ImageElmt(`zone_parcs/${data.id}`)}
          className="w-[100%] rounded-xl"
        />
      </div>
      <p className="text-primary-100 text-2xl lg:text-xl text-center m-2">
        {data.libZone}
      </p>
    </div>
  );
}

ZoneParcCard.PropTypes = {
  data: PropTypes.array,
};
export default ZoneParcCard;
