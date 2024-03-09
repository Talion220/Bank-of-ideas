import "./searchTitle.scss";
import { NavLink } from "react-router-dom";

function SearchTitle(){
    return(
        <div className="searchTitle">
            <div className="title">
                <h1>Изучайте идеи компании</h1>
                <p>1,000 идей</p>
            </div>
            <NavLink to="/idea-create">Создать идею</NavLink>
        </div>

    )
}

export default SearchTitle;