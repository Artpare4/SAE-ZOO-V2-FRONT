export const BASE_URL = "http://127.0.0.1:8000/api";

export function fetchAllFamilleAnimals(urlParams = URLSearchParams) {
  return fetch(
    `${BASE_URL}/famille_animals?page=${urlParams.get("page")}`,
  ).then((response) => response.json());
}

export function ImageElmt(elmt) {
  return `${BASE_URL}/${elmt}/image`;
}

export function fetchFamilleAnimalDetails(idFamille) {
  return fetch(`${BASE_URL}/famille_animals/${idFamille}`).then((response) =>
    response.json(),
  );
}

export function fetchAnimalDetails(idAnimal) {
  return fetch(`${BASE_URL}/animals/${idAnimal}`).then((reponse) =>
    reponse.json(),
  );
}

export function fetchAllZoneParc(urlParams = URLSearchParams) {
  return fetch(`${BASE_URL}/zone_parcs?page=${urlParams.get("page")}`).then(
    (response) => response.json(),
  );
}

export function fetchZoneParcDetail(idZone) {
  return fetch(`${BASE_URL}/zone_parcs/${idZone}`).then((response) =>
    response.json(),
  );
}

export function fetchAllEvent(urlParams = URLSearchParams) {
  return fetch(`${BASE_URL}/events?page=${urlParams.get("page")}`).then(
    (response) => response.json(),
  );
}

export function fetchEventDetail(idEvent) {
  return fetch(`${BASE_URL}/events/${idEvent}`).then((response) =>
    response.json(),
  );
}

export function getMe() {
  return fetch(`${BASE_URL}/me`, { credentials: "include" }).then(
    (response) => {
      if (response.ok) return response.json();
      return null;
    },
  );
}
export function loginUrl() {
  return `http://127.0.0.1:8000/login?redirect=${encodeURIComponent(location)}`;
}

export function logoutUrl() {
  return `http://127.0.0.1:8000/logout?redirect=${encodeURIComponent(location)}`;
}
