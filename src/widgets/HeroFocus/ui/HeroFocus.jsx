import Button from "@/shared/ui/Button/Button";
import "./HeroFocus.scss";


function HeroFocus() {
    return (
        <div className="background_focus">
            <h1 className="quote">
                “Small steps every day lead to big results.”
            </h1>
            <p>Study or work with a partner to stay focused</p>
            <div className="focus_buttons">
                <Button>Solo Focus</Button>
                <Button>Community Focus</Button>
            </div>
        </div>
    );
}

export default HeroFocus;
