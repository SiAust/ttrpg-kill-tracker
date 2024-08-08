import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons";
function PlayerDetails({player = "Aragon", characterName = "", level = 0, clazz = "Fighter", race = "Human"}) {
    return (
        <div className={"player-details"}>
            <div className={"info-item"}>
                <span id={"name-span"}>Name:</span>
                <span>{player}</span>
            </div>
            <div className="info-item">
                <span id={"level-span"}>Level:</span>
                <span> {level}</span>
            </div>
            <div className="info-item">
                <span id={"class-span"}>Class:</span>
                <span> {clazz}</span>
            </div>
            <div className="info-item">

                <span id={"race-span"}>Race:</span>
                <span> {race}</span>
            </div>

            <div className="btn-group" style={{display: "flex"}}>
                <button className={"small-btn edit-btn"}><FontAwesomeIcon icon={faBars}/></button>
                <button className={"small-btn"} onClick={() => alert(`Remove ${player}? Are you sure?`)}>
                    Remove
                </button>
                {/* TODO modal*/}
            </div>

        </div>
    )
}

export default PlayerDetails;