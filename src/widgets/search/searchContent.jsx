import searchIcon from "../../shared/images/search.svg";
import './searchContent.scss';

function SearchContent() {
  return (
    <div className="SearchContent">
      <form action="" method="get">
        <div className="search-container">
          <input type="text" name="Search" placeholder="Искать идеи..." maxLength={90}/>
          <button type="submit" className="search-button">
            <img src={searchIcon} alt="Search" className="search-icon"/>
          </button>
        </div>
      </form>
    </div>
  );
}

export default SearchContent;
