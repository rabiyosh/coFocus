import Header from "@/widgets/header/ui/Header";
import HeroFocus from "@/widgets/HeroFocus/ui/HeroFocus";
import Notes from "@/widgets/Notes/Notes";
import MiniTodoWidget from "@/widgets/MiniTodoWidget/MiniTodoWidget";
import AIChat from "@/widgets/AiChat/AIChat";
import MusicPlayer from "@/features/Music/ui/MusicPlayer";

import "./HomePage.scss";

function HomePage() {
    return (
        <div className="home_container">
            <div className="glass_container">
                <Header />
                <div className="widgets">
                    <div className="main_widgets">
                        <MusicPlayer />
                        <HeroFocus />
                    </div>
                    <div className="footer_widgets">
                        <Notes />
                        <MiniTodoWidget />
                        <AIChat />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomePage;
