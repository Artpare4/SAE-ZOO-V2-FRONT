import React from "react";
import { useEffect, useState } from "react";
import CardList from "../../components/CardList.jsx";
import { fetchAllFamilleAnimals } from "../../services/api/dataFetch.js";

function FamilleAnimalList() {
  const [familles, setFamilles] = useState([]);
  useEffect(() => {
    fetchAllFamilleAnimals().then((values) => {
      setFamilles(values["hydra:member"]);
    });
  }, []);
  return (
    <>
      <h1 className="text-center text-secondary-800 text-5xl md:text-5xl  lg:text-6xl lg:text-10xl mb-5">Nos animaux</h1>
      <CardList data={familles} type="familleAnimal" />
    </>
  );
}

export default FamilleAnimalList;
