const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://telnyx.com",
    projectId: "rzfw8y",

    setupNodeEvents(on, config) {
      
    },
  },
});
