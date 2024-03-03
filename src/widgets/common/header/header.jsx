import "./header.scss";
import lamp from "../../../shared/images/lamp.svg";
import avatar from "../../../shared/images/avatar.png";
import { NavLink} from "react-router-dom";

function Header() {
    return(
        <header>
            <NavLink to="/">
                <div className="logo">
                    <img src={lamp} alt="logo" />
                    <h3>Банк идей</h3>
                </div>
            </NavLink>
            <nav>
                <NavLink to="/">Поиск</NavLink>
                <NavLink to="/news">Новости</NavLink>
                <NavLink to="/idea-create">Создать идею</NavLink>
                <NavLink to="/profile"><img src={avatar} alt="avatar" /></NavLink>
            </nav> 
        </header>
    )
}

export default Header;