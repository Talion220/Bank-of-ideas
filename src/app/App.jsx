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
import AnalyticsOverview from "../pages/analytics/AnalyticsOverview";
import IdeasPerDay from "../pages/analytics/pages/IdeasPerDay";
import IdeasPerEmployee from "../pages/analytics/pages/IdeasPerEmployee";
import IdeasImplemented from "../pages/analytics/pages/IdeasImplemented";
import AllIdeas from "../pages/analytics/pages/AllIdeas";
import Documentation from "../pages/documentation/Documentation";
import DoYouHaveAnIdea from "../pages/doYouHaveAnIdea/DoYouHaveAnIdea";
import NewsPage from "../pages/newsPage/NewsPage";
import IdeaPage from "../pages/ideaPage/IdeaPage";

function App() {
  return (
    <MantineProvider theme={theme}>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="idea" element={<Search />} />
              <Route path="do-you-have-an-idea" element={<DoYouHaveAnIdea />} />
              <Route path="analytics" element={<Analytics />}>
                <Route index element={<AnalyticsOverview />} />
                <Route path="all-ideas" element={<AllIdeas />} />
                <Route
                  path="ideas-implemented"
                  element={<IdeasImplemented />}
                />
                <Route
                  path="ideas-per-employee"
                  element={<IdeasPerEmployee />}
                />
                <Route path="ideas-per-day" element={<IdeasPerDay />} />
              </Route>
              <Route path="documentation" element={<Documentation />} />
              <Route path="idea-create" element={<IdeaCreate />} />
              <Route path="profile" element={<Profile />} />
              <Route path="news" element={<News />} />
            </Route>
            <Route path="idea1" element={<IdeaPage />} />
            <Route path="news1" element={<NewsPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </MantineProvider>
  );
}

export default App;
