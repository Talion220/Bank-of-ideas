import HomePreview from "../../widgets/home/HomePreview";
import HomeBenefit from "../../widgets/home/HomeBenefit";
import HomeStage from "../../widgets/home/HomeStage";
import HomeTop from "../../widgets/home/HomeTop";
import HomeOtherWidgets from "../../widgets/home/HomeOtherWidgets";
import "./home.scss";

function Home() {
  return (
    <div className="home">
      <HomePreview />
      <HomeStage />
      <HomeTop />
      <HomeBenefit />
      <HomeOtherWidgets />
    </div>
  );
}

export default Home;
