import { lazy, Suspense, useLayoutEffect } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router";
import { ThemeProvider } from "next-themes";
import { MotionConfig } from "motion/react";
import Header from "./components/Header";
import Seo from "./components/Seo";
import About from "./pages/About";
import PageErrorBoundary from "./components/page-error-boundary";

const Ads = lazy(() => import("./pages/Ads"));
const Games = lazy(() => import("./pages/Games"));
const NotFound = lazy(() => import("./pages/NotFound"));

function ScrollToTop() {
  const location = useLocation();

  useLayoutEffect(() => {
    if (!location.hash) {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return null;
}

export default function App() {
  const { pathname } = useLocation();
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <MotionConfig reducedMotion="user">
        <div id="app">
          <div className="top-pattern" aria-hidden="true" />
          <Seo />
          <Header />
          <main id="main" className="main">
            <PageErrorBoundary key={pathname}>
              <Suspense
                fallback={
                  <output className="block py-12 text-center text-sm text-muted-foreground">
                    Loading page…
                  </output>
                }
              >
                <ScrollToTop />
                <Routes>
                  <Route path="/" element={<About />} />
                  <Route path="/games/" element={<Games />} />
                  <Route path="/ads/" element={<Ads />} />
                  <Route
                    path="/resume/"
                    element={<Navigate to="/" replace />}
                  />
                  <Route
                    path="/contact/"
                    element={<Navigate to="/" replace />}
                  />
                  <Route path="/404/" element={<NotFound />} />
                  <Route path="*" element={<Navigate to="/404/" replace />} />
                </Routes>
              </Suspense>
            </PageErrorBoundary>
          </main>
        </div>
      </MotionConfig>
    </ThemeProvider>
  );
}
