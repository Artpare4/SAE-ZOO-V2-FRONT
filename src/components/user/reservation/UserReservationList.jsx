import React from "react";
import PropTypes from "prop-types";
import ReservationCard from "./ReservationCard.jsx";

function UserReservationList({ data = {}, ...props }) {
  return (
    <div className="flex justify-center bg-background-200 pb-36">
      <div className="flex flex-col ">
        <h1 className="text-center text-8xl lg:text-6xl mt-6 lg:mt-24 mb-2 text-secondary-800">
          Vos Réservations
        </h1>
        {data.map((values) => (
          <ReservationCard data={values} />
        ))}
      </div>
    </div>
  );
}

export default UserReservationList;

UserReservationList.PropTypes = {
  data: PropTypes.object,
};
