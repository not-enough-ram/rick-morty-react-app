import "./App.css";
import Header from "./components/Header";
import React, { useEffect, useState } from "react";
import { filterCharacters } from "./service/filterCharacters";
import SearchBar from "./components/SearchBar";
import loadCharacters from "./service/loadCharacters";
import CharacterCard from "./components/CharacterCard";

function App() {
  const [searchString, setSearchString] = useState("");
  const [response, setResponse] = useState({ results: [] });
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [lastPage, setLastPage] = useState(1);

  useEffect(() => {
    loadCharacters(setResponse, setError, setIsLoading, page)
      .then(setLastPage(response.info.pages))
      .catch((err) => setError(err));
  }, [page]);
  return (
    <div className="App">
      <Header />
      <SearchBar
        searchString={searchString}
        setSearchString={setSearchString}
      />
      <button className={"ClearButton"} onClick={() => setSearchString("")}>
        Clear
      </button>
      <button
        className={"PrevPage"}
        onClick={() => setPage(page - 1)}
        disabled={page < 2}
      >
        Prev
      </button>
      <button
        className={"nextPage"}
        onClick={() => setPage(page + 1)}
        disabled={page >= lastPage}
      >
        Next
      </button>
      {isLoading && <p>Is loading...</p>}
      {error && <p>{error.message}</p>}
      {/*<CharacterCardZim />*/}
      <div className={"Cards"}>
        {filterCharacters(searchString, response).map((character) => (
          <CharacterCard key={character.id} character={character} />
        ))}
      </div>
    </div>
  );
}

export default App;
console.log(("b" + "a" + +"a" + "a").toLowerCase());
