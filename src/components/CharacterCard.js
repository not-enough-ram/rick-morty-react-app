import React from 'react'

function CharacterCard({data}){
    return(
        <div className={"CharacterCard"}>
            <h2 className={"CharacterName"}>{data.name}</h2>
            <div className={"CharacterPicture"}><img src={data.image}></img></div>
            <div className={"CharacterDescription"}>{data.type}</div>
        </div>
    )
}
export default CharacterCard;