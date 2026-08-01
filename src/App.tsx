import { Navigate, Route, Routes } from "react-router";
import Footer from "./components/Footer";
import Header from "./components/Header";
import AdProjects from "./pages/AdProjects";
import About from "./pages/About";
import Contact from "./pages/Contact";
import GameProjects from "./pages/GameProjects";
import NotFound from "./pages/NotFound";
import Resume from "./pages/Resume";

export default function App() {
  return (
    <div id="app">
      <Header />
      <main className="main">
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/game-projects" element={<GameProjects />} />
          <Route path="/ads" element={<AdProjects />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/404" element={<NotFound />} />
          <Route path="*" element={<Navigate to="/404" replace />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
