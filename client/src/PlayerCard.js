import PlayerImage from "./PlayerImage"
import PlayerDetails from "./PlayerDetails"
import StatsMenu from "./StatsMenu"
import PlayerStats from "./PlayerStats";
import "./styles/PlayerCard.css"

function PlayerCard({
                        player,
                        rank,
                        showKillAdjustBtns,
                        handleAddKill,
                        handlePlayerCompare,
                        toggleKillAdjustControls
}) {
    // console.log(playerDetails)
    // console.log(`totalKills: ${playerDetails.totalKills}`)

    return (
        <div className={"player-card"}>
            <div className={"player-info"}>
                <h2>{player.characterName}</h2>
                <PlayerImage />
                <PlayerDetails {...player}/>
            </div>
            <PlayerStats
                player={player}
                killStats={player.killStats}
                rank={rank + 1}
                totalKills={player.totalKills}
                showKillAdjustBtns={showKillAdjustBtns}
                handleAddKill={handleAddKill}
                toggleKillAdjustControls={toggleKillAdjustControls}
                handlePlayerCompare={handlePlayerCompare}
            />

        </div>
    )
}

export default PlayerCard;