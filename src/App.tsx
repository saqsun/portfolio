import { ThemeProvider } from "next-themes";
import { MotionConfig } from "motion/react";
import NavigationDock from "#components/layout/NavigationDock";
import Seo from "#components/layout/Seo";
import AppRoutes from "#src/AppRoutes";

export default function App() {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <MotionConfig reducedMotion="user">
        <div id="app">
          <div className="top-pattern" aria-hidden="true" />
          <Seo />
          <NavigationDock />
          <main id="main" className="main">
            <AppRoutes />
          </main>
        </div>
      </MotionConfig>
    </ThemeProvider>
  );
}
