import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSkull} from "@fortawesome/free-solid-svg-icons";
import StatsMenu from "./StatsMenu";

import "./styles/PlayerStats.css"
import {useState} from "react";

function PlayerStats({
                        player,
                         killStats = [],
                         rank = "?",
                         totalKills,
                         // showKillAdjustBtns = false,
                         handleAddKill,
                         // toggleKillAdjustControls,
                         handlePlayerCompare
                     }) {

    const [showKillAdjustBtns, setShowKillAdjustBtns] = useState(false);
    function toggleKillAdjustControls() {
        setShowKillAdjustBtns(prevState => !prevState);
        // console.debug(`showKillAdjustBtns: ${showKillAdjustBtns}`);
    }

    return (
        <>
            <div className={"player-stats"}>
                <div className={"kill-list"}>
                    <FontAwesomeIcon icon={faSkull}/>
                    {killStats.map((kill, index) => {
                        return (
                            <div key={index} className={"kill-list-item"}>
                                <p>{kill.type}</p>
                                <div className={"kill-count-container"}>
                                    {showKillAdjustBtns
                                        &&
                                        <button className={"kill-adjust-btn"}
                                                onClick={() => handleAddKill(player, {...kill, count: kill.count - 1})}
                                                disabled={kill.count <= 0}
                                        >
                                            -
                                        </button>}
                                    {showKillAdjustBtns
                                        &&
                                        <button className={"kill-adjust-btn"}
                                                onClick={() => handleAddKill(player, {...kill, count: kill.count + 1})}>
                                            +
                                        </button>}
                                    <p><strong>{kill.count}</strong></p>
                                </div>

                            </div>
                        )
                    })}
                </div>
                <div>
                    <div className={"kill-list-item kill-list-totals"}><p> Total Kills </p><p>
                        <strong>{totalKills}</strong></p></div>
                    <div className={"kill-list-item kill-list-totals"}><p> Party Rank </p><p><strong>#{rank}</strong>
                    </p></div>
                </div>


            </div>
            <StatsMenu handleAddKill={handleAddKill}
                       toggleKillAdjustControls={toggleKillAdjustControls}
                       handlePlayerCompare={handlePlayerCompare}/>
        </>

    )
}

export default PlayerStats;