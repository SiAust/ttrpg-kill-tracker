import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSkull} from "@fortawesome/free-solid-svg-icons";

function PlayerStats({killStats = [], rank = "?", totalKills}) {

    return (
        <div className={"player-stats"}>
            <div className={"kill-list"}>
                <FontAwesomeIcon icon={faSkull}/>
                {killStats.map((entry, index) => <div key={index} className={"kill-list-item"}><p>{entry.type}</p>
                    <p>{entry.count}</p></div>)}
            </div>
            <div>
                <div className={"kill-list-item kill-list-totals"}><p> Total Kills </p><p><strong>{totalKills}</strong></p></div>
                <div className={"kill-list-item kill-list-totals"}><p> Party Rank </p><p><strong>#{rank}</strong></p></div>
            </div>

        </div>
    )
}

export default PlayerStats;