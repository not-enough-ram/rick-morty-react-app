import './App.css';
import Header from "./components/Header";
import CharacterCardZim from "./components/CharacterCardZim"
import CharacterCard from "./components/CharacterCard";
import characters from "./assets/character.json";

function App() {
  // fetch('https://rickandmortyapi.com/api/character').then(response => response.json())
  return (
    <div className="App">
      <Header/>
      <CharacterCardZim/>
      {characters.results.map((character) => <CharacterCard key = {character.id} character = {character}/>)}
    </div>
  );
}

export default App;
console.log(("b" + "a" + +"a" + "a").toLowerCase());