import {useState} from "react";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus} from "@fortawesome/free-solid-svg-icons";
import {faShield} from "@fortawesome/free-solid-svg-icons";
import {faCodeCompare} from "@fortawesome/free-solid-svg-icons";

import Tooltip from "./Tooltip";
import "./styles/StatsMenu.css";

function StatsMenu({
                       handleAddKill, // TODO remove?
                       toggleKillAdjustControls,
                       handlePlayerCompare
                   }) {
    const [menuBtnDisabledState, setMenuBtnDisabledState] = useState([false, false, false]);

    function toggleActive(index) {
        console.log(index)
        switch (index) {
            case 0:
                setMenuBtnDisabledState(prevState => [prevState[0], !prevState[1], !prevState[2]]);
                break;
            case 1:
                setMenuBtnDisabledState(prevState => [!prevState[0], prevState[1], !prevState[2]]);
                break;
            case 2:
                setMenuBtnDisabledState(prevState => [!prevState[0], !prevState[1], prevState[2]]);
                break;
            default:
                setMenuBtnDisabledState([false, false, false]);
        }
    }

    return (
        <div className={"player-menu"}>
            <div className={"menu-item"}>
                <button disabled={menuBtnDisabledState[0]} onClick={() => {toggleActive(0) }}><FontAwesomeIcon alt={"Add kill"} icon={faPlus}/></button>
                <Tooltip text={"Add a new kill"}/>
            </div>
            <div className={"menu-item"} onClick={() => {
                toggleActive(1);
                toggleKillAdjustControls();
            }}>
                <button disabled={menuBtnDisabledState[1]}><FontAwesomeIcon icon={faShield}/></button>
                <Tooltip text={"Adjust kill stats"}/>
            </div>
            <div className={"menu-item"}>
                <button
                    disabled={menuBtnDisabledState[2]}
                    onClick={() => {
                    toggleActive(2)
                }}>
                    <FontAwesomeIcon icon={faCodeCompare} />
                </button>
                <Tooltip text={"Compare players"}/>
            </div>
        </div>
    )
}

export default StatsMenu;