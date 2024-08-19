import {useEffect, useState} from "react";
import ReactModal from "react-modal"

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEdit, faPlus, faChevronDown, faChevronUp, faList, faSquare, faTh} from "@fortawesome/free-solid-svg-icons";

import './styles/App.css';

import PlayerCard from "./PlayerCard";
import AddPlayerForm from "./AddPlayerForm";
import {THURSDAY_PLAYERS, Player} from "./Player"

function App() {

    const [showModal, setShowModal] = useState(false);

    const [data, setData] = useState("");
    const [players, setPlayers] = useState(THURSDAY_PLAYERS);

    const [showTextEdit, setShowTextEdit] = useState(false);
    const [partyName, setPartyName] = useState("Unknown");
    function handlePartyTextInput(event) {
        console.log(event.target.value);
        setPartyName(event.target.value);
    }
    /**
     * @param player The player to set the updated kill object on
     * @param updatedKill The updated kill object. `{type: [enemy type], count: [num]}`
     * */
    function handleAddKill(player, updatedKill) { // TODO change name, handleEDITKill

        try {
            const playerIndex = players.findIndex(curr => curr.id === player.id);
            const playerToUpdate = {...players[playerIndex]};
            console.debug(playerToUpdate);
            // remove the kill from the killStats array and place the updated kill object within
            playerToUpdate.killStats.splice(updatedKill.id, 1, updatedKill);
            // Create a shallow copy of players to prevent referencing old objects
            let updatedPlayers = [...players];
            // Remove and replace the outdated Player state
            updatedPlayers.splice(playerIndex, 1, playerToUpdate);
            // Update state
            setPlayers([...updatedPlayers]);
            console.debug(players);
            console.info(
                `Updated player ${playerToUpdate.characterName} with adjusted kill - type: ${updatedKill.type}, count: ${updatedKill.count}`);
        } catch (err) {
           console.error(err);
        }

    }

    function handlePlayerCompare() {

    }

    function createNewPlayer(formObj) { // TODO should be in Player.js?
        console.log(formObj);
        const player = new Player(formObj);
        // console.log(player);
        console.log(player.totalKills);
        // console.log(formData);
        setPlayers(prevState => [...prevState, player]);
        // console.log(players);
    }

    const SORT_ASC = ((a, b) => a.totalKills - b.totalKills);
    const SORT_DES = ((a, b) => b.totalKills - a.totalKills);
    const [sortAsc, setSortAsc] = useState(true);
    useEffect(() => {
        console.info(`Players sorted in ${sortAsc ? "ascending" : "descending"} order`);
             players.sort(sortAsc ? SORT_ASC : SORT_DES);
    }, [sortAsc]);

    /**
    * Handles the player card view change between grid and flex column.
    * */
    const [gridView, setGridView] = useState(true);
    useEffect(() => {

    }, [gridView]);


    useEffect(() => {
        fetch("/api") // TODO proxy issues
            .then((res) => res.json())
            .then((data) => setData(data))
            .catch(err => console.error(err));
        console.log(data);
    }, []);

    return (
        <div className="App">
            <header>
                <h1>TTRPG Kill Tracker</h1>
                <button onClick={() => setShowModal(true)}>New player
                    <FontAwesomeIcon icon={faPlus} />
                    <FontAwesomeIcon icon={faPlus} />
                </button>
            </header>
            <main>
                <header>
                    <h2>Party: {!showTextEdit && <span>{partyName}</span>}</h2>
                    {showTextEdit && <input
                        type={"text"}
                        onChange={handlePartyTextInput}
                        aria-label={"party-name-text-input"}
                    />}
                    <button onClick={() =>
                        setShowTextEdit(prevState => !prevState)} >
                        Edit
                        <FontAwesomeIcon icon={faEdit}/></button>
                    <button onClick={() => setSortAsc(prevState => !prevState)}>
                        <FontAwesomeIcon icon={sortAsc ? faChevronDown : faChevronUp} />
                    </button>
                    <button onClick={() => setGridView(prevState => !prevState)}>
                        <FontAwesomeIcon icon={gridView ? faList : faTh} />
                    </button>
                </header>
                <div id={"players-container"} className={gridView ? "playersGridView" : "playersFlexView"}>
                    {players.map((player, index) =>
                        <PlayerCard
                            key={`player${index}`}
                            player={player}
                            rank={index}
                            // showKillAdjustBtns={showKillAdjustBtns}
                            handleAddKill={handleAddKill}
                            // toggleKillAdjustControls={toggleKillAdjustControls}
                            handlePlayerCompare={handlePlayerCompare}
                        />)}
                </div>
                <ReactModal
                    className={"modal"}
                    isOpen={showModal}
                    appElement={document.getElementById("root")}
                >
                    <AddPlayerForm createNewPlayer={createNewPlayer} toggleForm={setShowModal}/>
                </ReactModal>
            </main>

        </div>
    );
}

export default App;
