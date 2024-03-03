import PropTypes from "prop-types";

function AnimalDetails({ id, ...props }) {}

export default AnimalDetails;

AnimalDetails.PropTypes = {
  id: PropTypes.number,
};
