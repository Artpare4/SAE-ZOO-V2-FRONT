import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import { fetchAnimalDetails } from "../../services/api/dataFetch.js";
import AnimalDetailComponent from "../../components/animal/AnimalDetailComponent.jsx";

function AnimalDetails({ id, ...props }) {
  const [animal, setAnimal] = useState({});
  useEffect(() => {
    fetchAnimalDetails(id).then((data) => {
      setAnimal(data);
    });
  }, []);
  return <AnimalDetailComponent data={animal}/>
}

export default AnimalDetails;

AnimalDetails.PropTypes = {
  id: PropTypes.number,
};
