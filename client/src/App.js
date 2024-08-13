import {useEffect, useState} from "react";
import ReactModal from "react-modal"

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEdit, faPlus, faChevronDown, faChevronUp} from "@fortawesome/free-solid-svg-icons";

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
        console.log(updatedKill);
        console.log(player);
        // find which player is updated
        try {
            const playerToUpdate = {...players.find(obj => obj.characterName === player.characterName)}; // TODO add id to players
            // remove the kill from the killStats array and place the updated kill object within
            playerToUpdate.killStats = playerToUpdate.killStats.splice(updatedKill.id, 1, updatedKill);
            // update state
            setPlayers(prevState => [...prevState, playerToUpdate]);
        } catch (err) {
           console.error(err);
        }

    }

    const [showKillAdjustBtns, setShowKillAdjustBtns] = useState(false);
    function toggleKillAdjustControls() {
        setShowKillAdjustBtns(prevState => !prevState);
        console.log(`showKillAdjustBtns: ${showKillAdjustBtns}`);
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
    const SORT_DEC = ((a, b) => b.totalKills - a.totalKills);
    const [sortAsc, setSortAsc] = useState(true);
    useEffect(() => {
             players.sort(sortAsc ? SORT_ASC : SORT_DEC);
    }, [players, sortAsc]);

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
                </header>
                <div id={"players-container"}>
                    {players.map((player, index) =>
                        <PlayerCard
                            key={`player${index}`}
                            player={player}
                            rank={index}
                            showKillAdjustBtns={showKillAdjustBtns}
                            handleAddKill={handleAddKill}
                            toggleKillAdjustControls={toggleKillAdjustControls}
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
