import searchIcon from "../../shared/images/search.svg";
import './searchContent.scss';

function SearchContent() {
  return (
    <div className="SearchContent">
      <form action="" method="get">
        <div className="search-container">
          <input type="text" name="Search" placeholder="Искать идеи..." maxLength={200}/>
          <button type="submit" className="search-button">
            <img src={searchIcon} alt="Search" className="search-icon"/>
          </button>
        </div>
      </form>

      <div className="filters">
          <form action="" method="get">
            <button>За все время</button>
            <button>За год</button>
            <button>За месяц</button>
            <button>За неделю</button>
            <button>За день</button>
            <button>Больше всего голосов</button>
            <button>Меньше всего голосов</button>
            <button>Самые обсуждаемые</button>
            <button>Одобрено</button>
            <button>Предложено</button>
            <button>Отклонено</button>
          </form>
      </div>
    </div>
  );
}

export default SearchContent;
