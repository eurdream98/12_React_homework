import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {getCharacterDetail, getCharacterInformation} from "../api/json";
import CharacterCard from "./CharacterCard";

function CharacterDetail(){
    const {name} = useParams();
    const [char,setChar] = useState();
    useEffect(
        () => {
            getCharacterInformation(name)
                .then(ocid => getCharacterDetail(ocid))
                .then(data => {
                    setChar(data)
                })
        },[]
    )

    return(
        char &&
        <div>
        <h1>캐릭터 정보</h1>
            <CharacterCard char={char}/>
        </div>
    )
}
export default CharacterDetail;