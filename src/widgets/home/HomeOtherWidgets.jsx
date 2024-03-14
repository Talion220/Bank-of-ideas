import HomeIdeas from "./homeOtherWidgets/HomeIdeas";
import HomeNews from "./homeOtherWidgets/HomeNews";
import "./homeOtherWidgets.scss";

function HomeOtherWidgets() {
  return (
    <div className="homeOtherWidgets">
      <HomeNews />
      <HomeIdeas />
    </div>
  );
}

export default HomeOtherWidgets;
