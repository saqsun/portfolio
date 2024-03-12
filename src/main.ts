import mixpanel from "mixpanel-browser";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

mixpanel.init("7f2f17de2932f13272e1f70f9301b2f5", {
  debug: true,
  track_pageview: true,
  persistence: "localStorage",
});

const app = createApp(App);

app.use(router);

app.mount("#app");
