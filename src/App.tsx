import { MotionConfig } from "motion/react";
import Seo from "#components/layout/Seo";
import AppRoutes, { type RoutePages } from "#src/AppRoutes";

export default function App({ pages }: { pages?: RoutePages }) {
  return (
    <MotionConfig reducedMotion="user">
      <div id="app">
        <div className="top-pattern" aria-hidden="true" />
        <Seo />
        <a
          className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:bg-background focus:p-4"
          href="#main"
        >
          Skip to content
        </a>
        <main id="main" className="main">
          <AppRoutes pages={pages} />
        </main>
      </div>
    </MotionConfig>
  );
}
