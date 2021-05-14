import axios from "axios";

export function getCharacterData() {
  return fetch("https://rickandmortyapi.com/api/character").then((response) =>
    response.json()
  );
}

export function getCharacterDataAxios(setError, page) {
  return axios
    .get("https://rickandmortyapi.com/api/character?page=" + page)
    .then((response) => response.data)
    .catch((err) => setError(err));
}
