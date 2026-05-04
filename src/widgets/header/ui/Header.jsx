import Inputs from "@/shared/ui/Input/Inputs";
import "./Header.scss";
import { useState } from "react";
import Button from "@/shared/ui/Button/Button";
import down from "@/shared/assets/icons/down.png";
import searchIcon from "@/shared/assets/icons/search.png";

function Header() {
    const [value, setValue] = useState("");

    return (
        <header className="header_navbar">
            <div className="glassWidgets search_box">
                <img src={searchIcon} alt="" className="icons" />
                <Inputs
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    placeholder="Search something"
                    className=" search_input"
                />
            </div>
            <h1 id="product_name">CoFocus</h1>
            <div className="register_buttons">
                <Button className="glassWidgets register_button">Sign in</Button>
                <Button className="glassWidgets register_button">Sign up</Button>
            </div>
            {/* <div className="accaount_contaiter">
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
                    <Button>
                        <img src={down} alt="" className="icons"/>
                    </Button>
                </div>
            </div> */}
        </header>
    );
}

export default Header;
