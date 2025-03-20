import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: "https://telnyx.com",
    viewportWidth: 1920,
    viewportHeight: 1080,
    setupNodeEvents(on, config) {
      
    },
  },
});
