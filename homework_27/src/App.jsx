import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import AboutMe from "./components/AboutMe";
import Contacts from "./components/Contacts";
import NotFound from "./components/NotFound";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeContext, themes } from "./themeContext";

const App = () => {
  const theme = useState(themes.light);
  const [currentTheme] = theme;

  return (
    <ThemeContext.Provider value={theme}>
      <BrowserRouter>
        <ErrorBoundary>
          <div
            className="content"
            style={{ background: currentTheme.backgroundColor }}
          >
            <Header />
            <main>
              <Routes>
                <Route path="*" element={<NotFound />} />
                <Route path="/" element={<Main />} />
                <Route path="/contacts" element={<Contacts />} />
                <Route path="/about-me" element={<AboutMe />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </ErrorBoundary>
      </BrowserRouter>
    </ThemeContext.Provider>
  );
};

export default App;
