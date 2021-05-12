import './App.css';
import Header from "./components/Header";
import CharacterCardZim from "./components/CharacterCardZim"
import CharacterCard from "./components/CharacterCard";

function App() {
  const data = {"id":250,"name":"Mrs. Sullivan","status":"Dead","species":"Human","type":"Cat controlled dead lady","gender":"Female","origin":{"name":"Earth (C-500A)","url":"https://rickandmortyapi.com/api/location/23"},"location":{"name":"Interdimensional Cable","url":"https://rickandmortyapi.com/api/location/6"},"image":"https://rickandmortyapi.com/api/character/avatar/250.jpeg","episode":["https://rickandmortyapi.com/api/episode/8"],"url":"https://rickandmortyapi.com/api/character/250","created":"2017-12-30T18:24:49.372Z"}
  return (
    <div className="App">
      <Header/>
      <CharacterCardZim/>
      <CharacterCard data={data}/>
    </div>
  );
}

export default App;
