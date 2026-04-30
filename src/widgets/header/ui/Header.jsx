import Inputs from "@/shared/ui/Input/Inputs";
import "./Header.scss";
import { useState } from "react";
import Button from "@/shared/ui/Button/Button";
import down from "@/shared/assets/icons/down.png"

function Header() {
    const [value, setValue] = useState("");

    return (
        <header className="">
            <Inputs
                value={value}
                onChange={(e) => setValue(e.target.value)}
                placeholder="enter"
            />
            <h1 id="product_name">coFocus</h1>
            <div className="accaount_contaiter">
            <div className="streak_counting">
              <h3></h3>
              <span></span>
            </div>
            <div className="notification">
                <Button></Button>
              <span></span>
            </div>
            <div className="account">
              <img src="" alt="" />
              <div className="account_info">
                <h3></h3>
                <p></p>
              </div>
              <Button><img src={down} alt="" /></Button>
            </div>

            </div>
        </header>
    );
}

export default Header;
