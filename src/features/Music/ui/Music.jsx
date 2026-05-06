import Button from "@/shared/ui/Button/Button";

function Music({ image, title, artist }) {
    return (
        <li className="musics_list">
            <div className="music_list">
                <div className="music_img">
                    <img src={image} alt="" />
                </div>
                <div className="music_info">
                    <p className="title">{title}</p>
                    <p className="artist">{artist}</p>
                </div>
            </div>
            <Button className="glassWidgets music_player">▶</Button>
        </li>
    );
}

export default Music;