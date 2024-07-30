import PlayerImage from "./PlayerImage"
import PlayerDetails from "./PlayerDetails"
import KillCounter from "./KillCounter"

function Player() {
    return (
        <div className={"player-card"}>
            <div className={"player-info"}>
                <PlayerImage />
                <PlayerDetails />
            </div>
            <KillCounter />
        </div>
    )
}

export default Player;