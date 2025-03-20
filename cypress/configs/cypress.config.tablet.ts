import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: "https://telnyx.com",
    viewportWidth: 768,
    viewportHeight: 1024,
    setupNodeEvents(on, config) {
   
    },
  },
});
