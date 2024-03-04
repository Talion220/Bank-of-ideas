import Search from "../pages/search/search";
import IdeaCreate from "../pages/ideaCreate/ideaCreate";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from "../widgets/common/layout/layout";
import NotFoundPage from "../pages/notFoundPage/NotFoundPage";
import Profile from "../pages/profile/profile";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Search />}/>
            <Route path="idea-create" element={<IdeaCreate />}/> 
            <Route path="profile" element={<Profile />}/> 
          </Route>
          <Route path="*" element={<NotFoundPage />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
