import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { fetchFamilleAnimalDetails } from "../../services/api/dataFetch.js";
import FamilleAnimalDetailComponent from "../../components/familleAnimal/FamilleAnimalDetailComponent.jsx";

function FamilleAnimalDetails({ id = null, ...props }) {
  const [detailsFamille, setDetails] = useState({});
  useEffect(() => {
    fetchFamilleAnimalDetails(id).then((data) => {
      setDetails(data);
    });
  }, []);
  return <FamilleAnimalDetailComponent data={detailsFamille} />;
}

FamilleAnimalDetails.PropTypes = {
  id: PropTypes.string,
};
export default FamilleAnimalDetails;
