import { useEffect, useState } from "react";
import CardList from "../components/CardList.jsx";
import { fetchAllFamilleAnimals } from "../services/api/dataFetch.js";

function FamilleAnimalList() {
  const [familles, setFamille] = useState({});

  useEffect(() => {
    fetchAllFamilleAnimals().then((values) => {
      setFamille(values);
    });
  }, []);
  return <CardList data={familles} type="familleAnimal" />;
}

export default FamilleAnimalList;
