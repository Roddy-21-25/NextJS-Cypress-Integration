const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'd7g9yp',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },

  component: {
    devServer: {
      framework: "next",
      bundler: "webpack",
    },
  },
});
