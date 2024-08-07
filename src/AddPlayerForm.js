import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faClose} from "@fortawesome/free-solid-svg-icons";
import {useState, useRef, useEffect} from "react";

function AddPlayerForm({createNewPlayer, toggleForm}) {
    function handleSubmit(event) {
        event.preventDefault();
        // Read the form data
        const form = event.target;
        const formData = new FormData(form);
        // formData.set("killStats", initialKills);

        const formObj = Object.fromEntries(formData.entries());
        formObj["killStats"] = initialKills;

        // console.log(initialKills)
        // console.log(formData);
        // console.log(formObj.killStats);
        createNewPlayer(formObj);
        toggleForm(false);
    }
    function handleReset(event) {
        setInitialKills([]);
    }

    const [initialKills, setInitialKills] = useState([]);

    const newKillEnemyType = useRef(null);
    const newKillCount = useRef(null);
    const [nextId, setNextId] = useState(0);
    function addKillHandler() {
        /* TODO if kill is contained in initialKills, merge kill */
        setInitialKills([...initialKills,
            {id: nextId, type: newKillEnemyType.current.value, count: Number(newKillCount.current.value)}]);
        // console.log(initialKills)
        setNextId(prevState => prevState +1)
    }

    function removeKill(index) {
        // const tempKillsArr = initialKills;
        // tempKillsArr.splice(index, 1);
        // console.log(tempKillsArr);
        setInitialKills(initialKills.filter(kill => kill.id !== index));
        // console.log(initialKills)
    }

    useEffect(() => {
        console.log("initialsKills (useEffect):");
        console.log(initialKills);
    }, [initialKills]);

    return (
        <form onSubmit={handleSubmit} id={"player-form"}>
            <div className="input-group">
                <label htmlFor="name-input">Character Name</label>
                <input id="name-input" name={"characterName"}/>
            </div>
            <div className="input-group">
                <label htmlFor="player-input">Player Name</label>
                <input id="player-input" name={"player"}/>
            </div>
            <div className="input-group">
                <label htmlFor="level-input">Level</label>
                <input id="level-input" name={"level"} type={"number"} min={0}/>
            </div>
            <div className="input-group">
                <label htmlFor="class-input">Class</label>
                <select id="class-input" name={"clazz"}>
                    <option value="barbarian">barbarian</option>
                    <option value="bard">bard</option>
                    <option value="cleric">cleric</option>
                    <option value="druid">druid</option>
                    <option value="fighter">fighter</option>
                    <option value="monk">monk</option>
                    <option value="paladin">paladin</option>
                    <option value="ranger">ranger</option>
                    <option value="rogue">rogue</option>
                    <option value="sorcerer">sorcerer</option>
                    <option value="wizard">wizard</option>
                </select>
            </div>
            <div className="input-group">
                <label htmlFor="race-input">Race</label>
                <select id="race-input" name={"race"}>
                    <option value="dwarf">dwarf</option>
                    <option value="elf">elf</option>
                    <option value="gnome">gnome</option>
                    <option value="half elf">half elf</option>
                    <option value="half orc">half orc</option>
                    <option value="halfling">halfling</option>
                    <option value="human">human</option>
                </select>
            </div>

            <fieldset id={"initial-kills-set"}>
                <legend>Initial Kills</legend>
                <div className="input-group">
                    <select ref={newKillEnemyType} aria-label={"Enemy type select input"}>
                        <option value="ogre">ogre</option>
                        <option value="orc">orc</option>
                        <option value="goblin">goblin</option>
                        <option value="spider">spider</option>
                    </select>
                    <label htmlFor="kill-count">Kills:</label>
                    <input id={"kill-count"} ref={newKillCount} type="number" min={1} defaultValue={1}/>
                    <button type="button" onClick={addKillHandler}>Add</button>
                </div>
                <ul id={"added-kills"}>
                    {initialKills.map((kill) => {
                        return (
                            <li key={kill.id}>
                                <span>{kill.type} X{kill.count}</span>
                                <button onClick={() => removeKill(kill.id)}>Remove</button>
                            </li>
                        )
                    })}
                </ul>
            </fieldset>

            <div>
                <button type="submit">Add</button>
                <button type="reset" onClick={handleReset}>Reset</button>
            </div>

            <button id={"close-form-btn"} onClick={() => toggleForm(false)}><FontAwesomeIcon icon={faClose}/></button>

        </form>
    )
}

export default AddPlayerForm;