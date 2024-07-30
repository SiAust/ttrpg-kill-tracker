function PlayerDetails({name = "Aragon", player = "", level = 0, clazz = "Fighter", race = "Human"}) {
    return (
        <div className={"player-details"}>
            <span id={"name-span"}>Name: {name}</span>
            <span id={"player-span"}>Player: {player}</span>
            <span id={"level-span"}>Level: {level}</span>
            <span id={"class-span"}>Class: {clazz}</span>
            <span id={"race-span"}>Race: {race}</span>
        </div>
    )
}

export default PlayerDetails;