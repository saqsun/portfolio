import { StrictMode } from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router";
import App from "#src/App";
import Games from "#pages/Games";
import Ads from "#pages/Ads";
import NotFound from "#pages/NotFound";

// Eager page imports prevent loading placeholders in the generated HTML.
const pages = { Games, Ads, NotFound };

export function render(path: string) {
  return renderToString(
    <StrictMode>
      <StaticRouter location={path}>
        <App pages={pages} />
      </StaticRouter>
    </StrictMode>,
  );
}
