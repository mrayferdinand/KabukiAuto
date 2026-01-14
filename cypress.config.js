const { defineConfig } = require("cypress");
// const allureWriter = require('@shelex/cypress-allure-plugin/writer'); // For Allure

module.exports = defineConfig({
  // Dengan Mochawesome
  reporter: 'mochawesome',   // <--- Tambahkan di sini
  reporterOptions: {         // <--- Opsi konfigurasi Mochawesome
    reportDir: 'cypress/reports',
    overwrite: false,
    html: true,
    json: true
  },
  e2e: {
    baseUrl: 'https://kabukiautoshop.salite.space/',
    experimentalStudio: true,
    viewportWidth: 1920,
    viewportHeight: 1080,
    setupNodeEvents(on, config) {
      // implement node event listeners here
      // Allure
      // allureWriter(on, config); // ✅ Ini sudah benar
      // return config
    },
  },
});
