function CharacterCard({char}){
    return(
        char &&
        <div className="character">
            <img src={char.character_image} style={{maxWidth:500}}/>
            <h1>이름 : {char.character_name}</h1>
            <h3>직업 : {char.character_class}</h3>
            <h3>레벨 : {char.character_level}</h3>
            <h3>길드 : {char.character_guild_name}</h3>
            <h3>경험치 : {char.character_exp_rate}%</h3>
        </div>

    )
}
export default CharacterCard;