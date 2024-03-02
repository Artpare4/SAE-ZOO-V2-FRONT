import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { fetchFamilleAnimalDetails } from "../../services/api/dataFetch.js";

function FamilleAnimalDetails({ id = null, ...props }) {
  const [detailsFamille, setDetails] = useState({});
  useEffect(() => {
    fetchFamilleAnimalDetails(id).then((data) => {
      setDetails(data);
    });
  }, []);
}

FamilleAnimalDetails.PropTypes = {
  id: PropTypes.string,
};
export default FamilleAnimalDetails;
