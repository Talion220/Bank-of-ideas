import Search from "../pages/search/search";
import IdeaCreate from "../pages/ideaCreate/ideaCreate";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from "../widgets/common/layout/layout";
import NotFoundPage from "../pages/notFoundPage/NotFoundPage";
import Profile from "../pages/profile/profile";
import News from "../pages/news/news";
import Home from "../pages/home/home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />}/>
            <Route path="search" element={<Search />}/>
            <Route path="idea-create" element={<IdeaCreate />}/> 
            <Route path="profile" element={<Profile />}/>
            <Route path="news" element={<News />} /> 
          </Route>
          <Route path="*" element={<NotFoundPage />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
