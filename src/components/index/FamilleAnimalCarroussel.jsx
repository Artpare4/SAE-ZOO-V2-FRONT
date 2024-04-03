import PropTypes from "prop-types";
import {ImageElmt} from "../../services/api/dataFetch.js";
import FamilleAnimalCard from "./FamilleAnimalCard.jsx";
import React from "react";


function FamilleAnimalCarroussel({data})
{
  return (
    <div className="flex px-3 flex-row gap-6">
      {data.map((cardData, index) => {
        return <FamilleAnimalCard title={cardData.nomFamilleAnimal}
                     description={cardData.nomScientifique.length > 100
                       ? cardData.nomScientifique.substring(0, 100)+"..."
                       : cardData.nomScientifique}
                     image={ImageElmt("famille_animals/"+cardData.id)}
                     key={index}/>
      })}
    </div>
    );
}

FamilleAnimalCarroussel.propTypes = {
  data: PropTypes.array.isRequired
}
FamilleAnimalCarroussel.defaultProps = {
  data: []
}

export default FamilleAnimalCarroussel;