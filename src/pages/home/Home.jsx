import HomePreview from "../../widgets/home/HomePreview";
import HomeInfo from "../../widgets/home/HomeInfo";
import HomeStage from "../../widgets/home/HomeStage";
import HomeTop from "../../widgets/home/HomeTop";
import HomeOtherPages from "../../widgets/home/HomeOtherPages";

function Home(){
    return(
        <div className="home">
            <HomePreview />
            <HomeStage />
            <HomeTop />
            <HomeInfo />
            <HomeOtherPages />  
            
        </div>
    )
}

export default Home;