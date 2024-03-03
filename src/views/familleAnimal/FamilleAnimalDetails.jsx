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
  return (
    <div className="mt-36 lg:mt-24 ">
      <FamilleAnimalDetailComponent data={detailsFamille} />
    </div>
  );
}

FamilleAnimalDetails.PropTypes = {
  id: PropTypes.number,
};
export default FamilleAnimalDetails;
