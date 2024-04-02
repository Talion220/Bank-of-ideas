import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import { theme } from "./Theme";

import Search from "../pages/search/Search";
import IdeaCreate from "../pages/ideaCreate/IdeaCreate";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../widgets/common/layout/Layout";
import NotFoundPage from "../pages/notFoundPage/NotFoundPage";
import Profile from "../pages/profile/Profile";
import News from "../pages/news/News";
import Home from "../pages/home/Home";
import Analytics from "../pages/analytics/Analytics";
import Documentation from "../pages/documentation/Documentation";
import DoYouHaveAnIdea from "../pages/doYouHaveAnIdea/DoYouHaveAnIdea";

function App() {
  return (
    <MantineProvider theme={theme}>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="search" element={<Search />} />
              <Route path="do-you-have-an-idea" element={<DoYouHaveAnIdea />} />
              <Route path="analytics" element={<Analytics />} />
              <Route path="documentation" element={<Documentation />} />
              <Route path="idea-create" element={<IdeaCreate />} />
              <Route path="profile" element={<Profile />} />
              <Route path="news" element={<News />} />
            </Route>
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </MantineProvider>
  );
}

export default App;
