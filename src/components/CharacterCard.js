import React from 'react'

function CharacterCard({character}){
    return(
        <div className={"CharacterCard"}>
            <h2 className={"CharacterName"}>{character.name}</h2>
            <div className={"CharacterPicture"}><img src={character.image}></img></div>
            <div className={"Species"}>{character.species}</div>
            <div className={"CharacterDescription"}>{character.type}</div>
        </div>
    )
}
export default CharacterCard;