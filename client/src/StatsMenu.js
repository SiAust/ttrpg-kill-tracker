import {useState} from "react";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus} from "@fortawesome/free-solid-svg-icons";
import {faShield} from "@fortawesome/free-solid-svg-icons";
import {faCodeCompare} from "@fortawesome/free-solid-svg-icons";

import Tooltip from "./Tooltip";
function StatsMenu() {

    return (
        <div className={"player-menu"}>
                <div className={"menu-item"}>
                    <FontAwesomeIcon alt={"Add kill"} icon={faPlus} onClick={null}/>
                    <Tooltip text={"Add a new kill"}/>
                </div>
                <div className={"menu-item"} onClick={null}>
                    <FontAwesomeIcon icon={faShield} />
                    <Tooltip text={"Adjust kill stats"}/>
                </div>
                <div className={"menu-item"}>
                    <FontAwesomeIcon icon={faCodeCompare} onClick={null}/>
                    <Tooltip text={"Compare players"}/>
                </div>
        </div>
    )
}

export default StatsMenu;