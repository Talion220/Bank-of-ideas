import Header from "../../widgets/common/header/header";
import Footer from "../../widgets/common/footer/footer";
import SearchTitle from "../../widgets/search/searchTitle";
import SearchContent from "../../widgets/search/searchContent";

function Search(){
    return(
        <div className="search">
            <Header />
            <SearchTitle />
            <SearchContent />
            <Footer />
        </div>
        
    )
}

export default Search;