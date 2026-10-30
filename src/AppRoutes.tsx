import { lazy, Suspense, useLayoutEffect, type ComponentType } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router";
import PageErrorBoundary from "#components/layout/PageErrorBoundary";
import Home from "#pages/Home";

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

export interface RoutePages {
  Games: ComponentType;
  Ads: ComponentType;
  NotFound: ComponentType;
}

// Build-time rendering supplies eager pages; only the browser needs lazy chunks.
const lazyPages: RoutePages | undefined = import.meta.env.SSR
  ? undefined
  : {
      Games: lazy(() => import("#pages/Games")),
      Ads: lazy(() => import("#pages/Ads")),
      NotFound: lazy(() => import("#pages/NotFound")),
    };

export default function AppRoutes({
  pages = lazyPages,
}: {
  pages?: RoutePages;
}) {
  if (!pages) throw new Error("Prerendering requires eager route components");
  const { Games, Ads, NotFound } = pages;
  const { pathname } = useLocation();

  return (
    <PageErrorBoundary key={pathname}>
      <Suspense fallback={<PageLoading />}>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/games/" element={<Games />} />
          <Route path="/ads/" element={<Ads />} />
          <Route path="/404/" element={<NotFound />} />
          <Route path="*" element={<Navigate to="/404/" replace />} />
        </Routes>
      </Suspense>
    </PageErrorBoundary>
  );
}
