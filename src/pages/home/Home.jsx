import HomePreview from "../../widgets/home/HomePreview";
import HomeBenefit from "../../widgets/home/HomeBenefit";
import HomeStage from "../../widgets/home/HomeStage";
import HomeTop from "../../widgets/home/HomeTop";
import HomeOtherPages from "../../widgets/home/HomeOtherPages";
import './home.scss';

function Home(){
    return(
        <div className="home">
            <HomePreview />
            <HomeStage />
            <HomeTop />
            <HomeBenefit />
            <HomeOtherPages />  
            
        </div>
    )
}

export default Home;