import React from "react";
import PropTypes from "prop-types";

function AnimalDetailComponent({ data = {}, ...props }) {}

export default AnimalDetailComponent;

AnimalDetailComponent.PropTypes = {
  data: PropTypes.array,
};
