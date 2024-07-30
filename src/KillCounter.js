import {useState} from "react";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus} from "@fortawesome/free-solid-svg-icons";
import {faMinus} from "@fortawesome/free-solid-svg-icons";
function KillCounter() {
    const [kills, setKills] = useState(0);

    function handleDecrement(prevState) {
        if (prevState <= 0) {
            return 0;
        }
        return prevState - 1;
    }
    return (
        <div className={"killCounter"}>
            <span>{kills}</span>
            <div>
                <FontAwesomeIcon icon={faPlus} onClick={() => setKills((prevState) => prevState + 1)}/>
                <FontAwesomeIcon icon={faMinus} onClick={() => setKills(handleDecrement)}/>
            </div>
        </div>
    )
}

export default KillCounter;