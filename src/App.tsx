import { lazy, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Seo from "./components/Seo";
import About from "./pages/About";

const Ads = lazy(() => import("./pages/Ads"));
const Contact = lazy(() => import("./pages/Contact"));
const Games = lazy(() => import("./pages/Games"));
const NotFound = lazy(() => import("./pages/NotFound"));
const Resume = lazy(() => import("./pages/Resume"));

export default function App() {
  return (
    <div id="app">
      <Seo />
      <Header />
      <main className="main">
        <Suspense fallback={<output className="sr-only">Loading page…</output>}>
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/games" element={<Games />} />
            <Route path="/ads" element={<Ads />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/404" element={<NotFound />} />
            <Route path="*" element={<Navigate to="/404" replace />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}
