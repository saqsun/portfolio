import { ThemeProvider } from "next-themes";
import { MotionConfig } from "motion/react";
import Header from "./components/Header";
import Seo from "./components/Seo";
import AppRoutes from "./AppRoutes";

export default function App() {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <MotionConfig reducedMotion="user">
        <div id="app">
          <div className="top-pattern" aria-hidden="true" />
          <Seo />
          <Header />
          <main id="main" className="main">
            <AppRoutes />
          </main>
        </div>
      </MotionConfig>
    </ThemeProvider>
  );
}
