import React from "react";

function CharacterCard({ character }) {
  return (
    <div className={"CharacterCard"}>
      <div className={"MagicTemplate"}>
        <h2 className={"CharacterName"}>{character.name}</h2>
        <div className={"CharacterPicture"}>
          <img src={character.image} alt={"Nonono"}></img>
        </div>
        <div className={"Species"}>{character.species}</div>
        <div className={"CharacterDescription"}>{character.type}</div>
      </div>
    </div>
  );
}

export default CharacterCard;
