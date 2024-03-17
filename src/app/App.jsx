import "@mantine/core/styles.css";
import { MantineProvider, createTheme, rem } from "@mantine/core";

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

const theme = createTheme({
  white: "rgba(247, 250, 252, 1)",
  black: "rgba(13, 20, 28, 1)",
  fontFamily: "Inter",
  primaryColor: "blue",
  headings: {
    textWrap: "wrap",
    fontSizes: {
      xs: rem(12),
      sm: rem(14),
      md: rem(16),
      lg: rem(18),
      xl: rem(20),
    },
    spacing: {},
    colors: {
      black: "rgba(13, 20, 28, 1)",
      white: "rgba(247, 250, 252, 1)",
      gray: ["rgba(232, 237, 242, 1)", "rgba(79, 115, 150, 1)"],
      blue: "rgba(26, 128, 230, 1)",
    },
  },
});

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
