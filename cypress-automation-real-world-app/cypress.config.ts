import { defineConfig } from "cypress";

export default defineConfig({
  //projectId: "xxxxxxxxxx", set to cypress cloud
  viewportHeight: 1000,

  viewportWidth: 1280,
  defaultCommandTimeout: 11000,
  pageLoadTimeout: 10000,
  numTestsKeptInMemory: 3,
  experimentalMemoryManagement: true,

  retries: {
    runMode: 2,
    openMode: 0,
  },

  env: {
    username: "Tavares_Barrows",
    password: "s3cret",
    apiUrl: "http://localhost:3000/",
    silenceCommandLog: false,
  },

  video: false,

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "http://localhost:3000/",
  },

  chromeWebSecurity: false,

  component: {
    devServer: {
      framework: "react",
      bundler: "vite",
    },
    specPattern: "src/**/*.cy.{js,jsx,ts,tsx}",
    supportFile: "cypress/support/component.ts",
    setupNodeEvents(on, config) {
      return config;
    },
  },
  
});
