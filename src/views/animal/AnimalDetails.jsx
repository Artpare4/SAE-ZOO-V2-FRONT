import PropTypes from "prop-types";
import React from "react";
function AnimalDetails({ id, ...props }) {}

export default AnimalDetails;

AnimalDetails.PropTypes = {
  id: PropTypes.number,
};
