import { defineConfig } from "cypress";

export default defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    setupNodeEvents(_on, _config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(_on);
    },
  },
});
