import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import { theme } from "./Theme";

import Search from "../pages/search/Search";
import SearchShell from "../pages/search/SearchShell";
import IdeaCreate from "../pages/ideaCreate/IdeaCreate";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../widgets/common/layout/Layout";
import NotFoundPage from "../pages/notFoundPage/NotFoundPage";
import Profile from "../pages/profile/Profile";
import ProfileShell from "../pages/profile/ProfileShell";
import Alerts from "../pages/profile/Alerts";
import News from "../pages/news/News";
import NewsShell from "../pages/news/NewsShell";
import Home from "../pages/home/Home";
import AnalyticsShell from "../pages/analytics/AnalyticsShell";
import Analytics from "../pages/analytics/Analytics";
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
              <Route path="idea" element={<SearchShell />}>
                <Route index element={<Search />} />
                <Route path=":id" element={<IdeaPage />} />
              </Route>
              <Route path="do-you-have-an-idea" element={<DoYouHaveAnIdea />} />
              <Route path="analytics" element={<AnalyticsShell />}>
                <Route index element={<Analytics />} />
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
              <Route path="profile" element={<ProfileShell />}>
                <Route index element={<Profile />} />
                <Route path="alerts" element={<Alerts />} />
              </Route>
              <Route path="news" element={<NewsShell />}>
                <Route index element={<News />} />
                <Route path=":id" element={<NewsPage />} />
              </Route>
            </Route>

            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </MantineProvider>
  );
}

export default App;
