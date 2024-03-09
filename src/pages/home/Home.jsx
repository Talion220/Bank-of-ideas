import HomePreview from "../../widgets/home/HomePreview";
import HomeIdeas from "../../widgets/home/HomeIdeas";
import HomeInfo from "../../widgets/home/HomeInfo";
import HomeNews from "../../widgets/home/HomeNews";
import HomeStage from "../../widgets/home/HomeStage";
import HomeTop from "../../widgets/home/HomeTop";

function Home(){
    return(
        <div className="home">
            <HomePreview />
            <HomeStage />
            <HomeTop />
            <HomeInfo />
            <div className="homeGroup">
                <HomeNews />
                <HomeIdeas />
            </div>
            

        </div>
    )
}

export default Home;