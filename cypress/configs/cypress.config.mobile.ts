import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: "https://telnyx.com",
    viewportWidth: 375,
    viewportHeight: 667,
    setupNodeEvents(on, config) {
      
    },
  },
});
