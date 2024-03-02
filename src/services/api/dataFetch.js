export const BASE_URL = "http://127.0.0.1:8000/api";

export function fetchAllFamilleAnimals() {
  return fetch(`${BASE_URL}/famille_animals`).then((response) =>
    response.json(),
  );
}

export function ImageElmt(elmt) {
  return `${BASE_URL}/${elmt}/image`;
}
