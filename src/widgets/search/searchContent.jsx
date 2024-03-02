import searchIcon from "../../shared/images/search.svg";
import './searchContent.scss';
import approved from "../../shared/images/approved.svg";
import rejected from "../../shared/images/rejected.svg";
import proposed from "../../shared/images/proposed.svg";

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

      <div className="scrollable-container">
          <div className="ideaBlock">
            <div className="ideaBlockLeft">
              <img src={approved} alt="" />
              <div className="ideaBlockLeftTitle">
                <h4>Бесплатная пицца по понедельникам</h4>
                <p>5 голосов, 2 комментария</p>
              </div>              
            </div>
            <p>2 дня назад</p>
          </div>
          <div className="ideaBlock">
            <div className="ideaBlockLeft">
              <img src={rejected} alt="" />
              <div className="ideaBlockLeftTitle">
                <h4>Бесплатная пицца по понедельникам</h4>
                <p>5 голосов, 2 комментария</p>
              </div>              
            </div>
            <p>2 дня назад</p>
          </div>
          <div className="ideaBlock">
            <div className="ideaBlockLeft">
              <img src={proposed} alt="" />
              <div className="ideaBlockLeftTitle">
                <h4>Бесплатная пицца по понедельникам</h4>
                <p>5 голосов, 2 комментария</p>
              </div>              
            </div>
            <p>2 дня назад</p>
          </div>
          <div className="ideaBlock">
            <div className="ideaBlockLeft">
              <img src={approved} alt="" />
              <div className="ideaBlockLeftTitle">
                <h4>Бесплатная пицца по понедельникам</h4>
                <p>5 голосов, 2 комментария</p>
              </div>              
            </div>
            <p>2 дня назад</p>
          </div>
          <div className="ideaBlock">
            <div className="ideaBlockLeft">
              <img src={approved} alt="" />
              <div className="ideaBlockLeftTitle">
                <h4>Бесплатная пицца по понедельникам</h4>
                <p>5 голосов, 2 комментария</p>
              </div>              
            </div>
            <p>2 дня назад</p>
          </div>
          <div className="ideaBlock">
            <div className="ideaBlockLeft">
              <img src={proposed} alt="" />
              <div className="ideaBlockLeftTitle">
                <h4>Бесплатная пицца по понедельникам</h4>
                <p>5 голосов, 2 комментария</p>
              </div>              
            </div>
            <p>2 дня назад</p>
          </div>
          <div className="ideaBlock">
            <div className="ideaBlockLeft">
              <img src={approved} alt="" />
              <div className="ideaBlockLeftTitle">
                <h4>Бесплатная пицца по понедельникам</h4>
                <p>5 голосов, 2 комментария</p>
              </div>              
            </div>
            <p>2 дня назад</p>
          </div>
      </div>
    </div>
  );
}

export default SearchContent;
