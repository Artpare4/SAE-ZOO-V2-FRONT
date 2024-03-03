import React from "react";
import PropTypes from "prop-types";
import { ImageElmt } from "../../services/api/dataFetch.js";

function ZoneParcDetailComponent({ data = {}, ...props }) {
  return (
    <div className="flex justify-center mb-20">
      <div className="flex flex-col w-1/2 m-3 p-3 rounded-3xl bg-secondary-800/60 backdrop-filter backdrop-blur-sm border border-secondary-50 border-s">
        <h1 className="text-center text-6xl text-text-50 lg:text-4xl m-2">
          {data.libZone}
        </h1>
        <div className="flex justify-center">
          <img
            className="w-[100%] rounded-2xl"
            src={ImageElmt(`zone_parcs/${data.id}`)}
          />
        </div>
      </div>
    </div>
  );
}

export default ZoneParcDetailComponent;

ZoneParcDetailComponent.PropTypes = {
  data: PropTypes.array,
};
