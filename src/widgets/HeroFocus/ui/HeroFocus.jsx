import Button from "@/shared/ui/Button/Button"
import "./HeroFocus.scss"
import focusImg from "@/shared/assets/images/focus_bg.jpg"

function HeroFocus() {
  return (
    <div>
        <img src={focusImg} alt="focusBackground" className="background_focus" />
        <Button/>
    </div>
  )
}

export default HeroFocus