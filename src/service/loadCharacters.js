import { getCharacterData, getCharacterDataAxios } from "./ApiService";

function loadCharacters(setResponse, setError, setIsLoading, page) {
  setIsLoading(true);
  return getCharacterDataAxios(setError, page)
    .then((characters) => setResponse(characters))
    .finally(setIsLoading(false));
}

export default loadCharacters;
