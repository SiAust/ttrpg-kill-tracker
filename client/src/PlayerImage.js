import "./styles/PlayerImage.css";

function PlayerImage({placeHolder, playerName}) {
    return (
        <div className={"player-image"}>
            <img id={`${playerName}Image`} src={placeHolder} />
        </div>
    )
}

export default PlayerImage;

