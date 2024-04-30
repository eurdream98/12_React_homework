import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import {getCharacterDetail, getCharacterInformation} from "../api/json";

function CharacterElement({character,image}){
    const [url,setUrl] = useState();
    useEffect(
        () => {
            getCharacterInformation(character.character_name)
                .then(ocid => getCharacterDetail(ocid))
                .then(data => {
                    console.log('데이터:'+data);
                    setUrl(data)
                })
        },[]
    )
    return(
        <Link to={`/${character.character_name}`}>
        <div  className="character">
            {/*<img src={url.character_image}/>*/}
            <h1>{character.ranking}위</h1>
            <h3>캐릭터명 : {character.character_name}</h3>
            <h3>레벨 : {character.character_level}</h3>
            <h3>월드 : {character.world_name}</h3>
            <h3>길드 : {character.character_guildname}</h3>
            <h3>인기도 : {character.character_popularity}</h3>
        </div>
        </Link>
    )
}
export default CharacterElement;