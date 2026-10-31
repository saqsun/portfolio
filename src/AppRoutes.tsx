import { lazy, Suspense, useLayoutEffect, type ComponentType } from "react";
import { Route, Routes, useLocation } from "react-router";
import PageErrorBoundary from "#components/layout/PageErrorBoundary";
import Home from "#pages/Home";

function ScrollToTop() {
  const location = useLocation();

  useLayoutEffect(() => {
    if (location.hash) {
      document.getElementById(location.hash.slice(1))?.scrollIntoView();
    } else {
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
  NotFound: ComponentType;
}

// Build-time rendering supplies eager pages; only the browser needs lazy chunks.
const lazyPages: RoutePages | undefined = import.meta.env.SSR
  ? undefined
  : {
      NotFound: lazy(() => import("#pages/NotFound")),
    };

export default function AppRoutes({
  pages = lazyPages,
}: {
  pages?: RoutePages;
}) {
  if (!pages) throw new Error("Prerendering requires eager route components");
  const { NotFound } = pages;
  const { pathname } = useLocation();

  return (
    <PageErrorBoundary key={pathname}>
      <Suspense fallback={<PageLoading />}>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/404/" element={<NotFound />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </PageErrorBoundary>
  );
}
