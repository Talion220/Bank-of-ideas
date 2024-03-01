import "./header.css";
import lamp from "../../shared/images/lamp.svg";
import avatar from "../../shared/images/avatar.png";

function Header() {
    return(
        <header>
            <a href="#">
                <div className="logo">
                    <img src={lamp} alt="logo" />
                    <h3>Банк идей</h3>
                </div>
            </a>
            <nav>
                <a href="#">Поиск</a>
                <a href="#">Новости</a>
                <a href="#">Создать идею</a>
                <a href="#"><img src={avatar} alt="avatar" /></a>
            </nav> 
        </header>
    )
}

export default Header;