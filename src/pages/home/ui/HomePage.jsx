import Header from "@/widgets/header/ui/Header";
import HeroFocus from "@/widgets/HeroFocus/ui/HeroFocus";
import MusicPlayer from "@/widgets/musicPlayer/ui/MusicPlayer";
import "./HomePage.scss";

function HomePage() {
    return (
        <div className="home_container">
            <div className="glass_container">
                <Header />
                <MusicPlayer />
                <HeroFocus />
            </div>
        </div>
    );
}

export default HomePage;
