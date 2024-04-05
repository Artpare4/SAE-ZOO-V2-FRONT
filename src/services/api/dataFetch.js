const API_PORT = "8000";
const BASE_APP = `http://127.0.0.1:${API_PORT}/`;
export const BASE_URL = `${BASE_APP}api`;

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
  return `${BASE_APP}login?redirect=${encodeURIComponent(location)}`;
}

export function logoutUrl() {
  return `${BASE_APP}logout?redirect=${encodeURIComponent(location.origin)}`;
}

export function CrudUrl() {
  return `${BASE_APP}admin`;
}

export function reservationUrl() {
  return `${BASE_APP}reservation/create`;
}

export function reservationDelete(id) {
  return `${BASE_APP}reservation/delete/${id}`;
}

export function reservationEvents(id) {
  return `${BASE_APP}reservation/events/${id}`;
}

export function updateUserUrl() {
  return `${BASE_APP}user/update?redirect=${encodeURIComponent(location)}`;
}