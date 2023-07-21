const {defineConfig} = require("cypress");

module.exports = defineConfig({
    e2e: {
        projectId: "vbf851",
        defaultCommandTimeout: 15000,
        testIsolation: true,
        setupNodeEvents(on, config) {
            // implement node event listeners here
        },
        reporter: 'junit',
        reporterOptions: {
            mochaFile: 'results/junit.xml',
        },
    },
});
