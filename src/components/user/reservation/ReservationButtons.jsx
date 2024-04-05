import { React } from "react";
import PropTypes from "prop-types";
import {
  reservationDelete,
  reservationEvents,
} from "../../../services/api/dataFetch";

function ReservationButtons({ id }) {
  return (
    <div className="flex flex-row justify-center">
      <a
        className="text-center bg-primary-500  mr-2 rounded-2xl p-2 text-4xl lg:text-2xl"
        href={reservationDelete(id)}
      >
        Supprimer
      </a>
      <a
        className="text-center bg-primary-500  mr-2 rounded-2xl p-2 text-4xl lg:text-2xl"
        href={reservationEvents(id)}
      >
        Planifier
      </a>
    </div>
  );
}

ReservationButtons.propTypes = {
  id: PropTypes.number,
};

ReservationButtons.defaultProps = {
  id: 1,
};

export default ReservationButtons;
