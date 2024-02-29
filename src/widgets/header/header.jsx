import "./header.css";
import lamp from "../../shared/images/lamp.svg";

function Header() {
    return(
        <header>
            <img src={lamp} alt="lamp" />
            <h3>Банк идей</h3>
        </header>
    )
}

export default Header;