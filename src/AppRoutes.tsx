import { lazy, Suspense, useLayoutEffect } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router";
import PageErrorBoundary from "./components/page-error-boundary";
import About from "./pages/About";

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

function PageLoading() {
  return (
    <output className="block py-12 text-center text-sm text-muted-foreground">
      Loading page…
    </output>
  );
}

export default function AppRoutes() {
  const { pathname } = useLocation();

  return (
    <PageErrorBoundary key={pathname}>
      <Suspense fallback={<PageLoading />}>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/games/" element={<Games />} />
          <Route path="/ads/" element={<Ads />} />
          <Route path="/404/" element={<NotFound />} />
          <Route path="*" element={<Navigate to="/404/" replace />} />
        </Routes>
      </Suspense>
    </PageErrorBoundary>
  );
}
