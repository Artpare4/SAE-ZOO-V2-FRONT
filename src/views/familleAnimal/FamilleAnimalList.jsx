import React, { useEffect, useState } from "react";
import CardList from "../../components/CardList.jsx";
import { fetchAllFamilleAnimals } from "../../services/api/dataFetch.js";
import Pagination from "../../components/Pagination.jsx";
import paginationFromHydraView from "../../services/transformers/paginationFromHydraView.js";

function FamilleAnimalList() {
  const [page, setPage] = useState(1);
  const [familles, setFamilles] = useState([]);
  const [pagination, setPagination] = useState([]);
  const urlParam = new URLSearchParams();
  useEffect(() => {
    urlParam.append("page", page);
    fetchAllFamilleAnimals(urlParam).then((values) => {
      setFamilles(values["hydra:member"]);
      setPagination(paginationFromHydraView(values["hydra:view"]));
    });
  }, [page]);
  return (
    <>
      <h1 className="text-center text-secondary-800 text-5xl md:text-5xl  lg:text-6xl lg:text-10xl mb-5">
        Nos animaux
      </h1>
      <Pagination setPage={setPage} pagination={pagination} />
      <CardList data={familles} type="familleAnimal" />
    </>
  );
}

export default FamilleAnimalList;
