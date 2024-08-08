import PlayerImage from "./PlayerImage"
import PlayerDetails from "./PlayerDetails"
import StatsMenu from "./StatsMenu"
import PlayerStats from "./PlayerStats";

function PlayerCard({playerDetails, rank}) {
    console.log(playerDetails)
    console.log(`totalKills: ${playerDetails.totalKills}`)
    return (
        <div className={"player-card"}>
            <div className={"player-info"}>
                <h2>{playerDetails.characterName}</h2>
                <PlayerImage />
                <PlayerDetails {...playerDetails}/>
            </div>
            <PlayerStats
                killStats={playerDetails.killStats}
                rank={rank + 1}
                totalKills={playerDetails.totalKills}/>
            <StatsMenu />
        </div>
    )
}

export default PlayerCard;