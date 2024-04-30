import {useEffect, useState} from "react";
import {getCharacterDetail, getCharacterInformation, getRank} from "../api/json";
import CharacterElement from "../components/CharacterElement";

function CharacterList(){
    const [characters,setCharacters] = useState();
    const [image,setImage] = useState();
    useEffect(
        () => {
            getRank().then(data => {
                setCharacters(data)
                return data
            })
        },
        []
    )
    return(

        <div>
            <h1>Top 200위 캐릭터</h1>
            <div className="wrapper">
            { characters && characters.map(character => <CharacterElement key={character.ranking} character={character}/>)}
            </div>
        </div>
    )
}
export default CharacterList;