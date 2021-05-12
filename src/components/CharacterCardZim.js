import React from 'react'
import Zim from '../assets/InvaderZim1.webp'

function CharacterCardZim(){
    return(
        <div className={"CharacterCardZim"}>
            <h2 className={"CharacterNameZim"}>Invader Zim</h2>
            <div className={"CharacterPictureZim"}><img src={Zim}></img></div>
            <div className={"CharacterDescriptionZim"}>The most evil genius</div>
        </div>
    )
}
export default CharacterCardZim;