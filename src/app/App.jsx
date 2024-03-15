import "@mantine/core/styles.css";
import { MantineProvider, createTheme } from "@mantine/core";

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

// const theme = createTheme({
//   colors: {
//     "oklch-blue": [
//       "oklch(96.27% 0.0217 238.66)",
//       "oklch(92.66% 0.0429 240.01)",
//       "oklch(86.02% 0.0827 241.66)",
//       "oklch(78.2% 0.13 243.83)",
//       "oklch(71.8% 0.1686 246.06)",
//       "oklch(66.89% 0.1986 248.32)",
//       "oklch(62.59% 0.2247 250.29)",
//       "oklch(58.56% 0.2209 251.26)",
//       "oklch(54.26% 0.2067 251.67)",
//       "oklch(49.72% 0.1888 251.59)",
//     ],
//   },
// });

function App() {
  return (
    <MantineProvider>
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
