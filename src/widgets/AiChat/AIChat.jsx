import Button from "@/shared/ui/Button/Button";
import "./AiChat.scss"
import ai from "@/shared/assets/images/ai.png"

function AIChat() {
  return (
      <div className="glassWidgets aichat">
        <div className="aiImage">
          <img src={ai} alt="" />
        </div>
          <div className="glassWidgets chatWithai">
          <Button>Go chat with AI</Button>
          </div>
      </div>
  );
}

export default AIChat;