import GlassCard from "@/shared/ui/background/GlassCard";
import "./MusicPlayer.scss";
import Music from "./Music";

// import images
import threeam from "@/shared/assets/images/3am.png";
import experience from "@/shared/assets/images/experience.jpg";
import lofi from "@/shared/assets/images/lofi.jpg";
import tooclose from "@/shared/assets/images/tooclose.jpg";
import xo from "@/shared/assets/images/xo.jpg";
// import audios
import songThreeam from "@/shared/assets/audios/3am.mp3";
import songExperience from "@/shared/assets/audios/experience.mp3";
import songLofi from "@/shared/assets/audios/lofi.mp3";
import songTooClose from "@/shared/assets/audios/tooClose.mp3";
import songXO from "@/shared/assets/audios/xo.mp3";

function MusicPlayer() {
    const playList = [
        {
            id: 1,
            image: xo,
            title: "XO (Only If You Say Yes)",
            artist: "ENHYPEN",
            audio: songXO,
        },
        {
          id: 2,
          image: experience,
          title: "Experience",
          artist: "Ludovico Einaudi",
          audio: songExperience,
        },
        {
          id: 3,
          image: lofi,
          title: "Lo-Fi for study",
          artist: "Lo-Fi Music",
          audio: songLofi,
        },
        {
          id: 4,
          image: tooclose,
          title: "Too Close",
          artist: "ENHYPEN",
          audio: songTooClose,
        },
        {
            id: 5,
            image: threeam,
            title: "3am",
            artist: "ROSE",
            audio: songThreeam,
        }
      ];
      
      return (
        <div className="glassWidgets musicPlayer">
            <h1>WHAT TO LISTEN TO</h1>
            <ul className="music_list_box">
                {playList.map((music) => (
                    <Music
                        key={music.id}
                        image={music.image}
                        title={music.title}
                        artist={music.artist}
                    />
                ))}
            </ul>
            <div className="glassWidgets musicPlayer2"> </div>
        </div>
    );
}

export default MusicPlayer;
