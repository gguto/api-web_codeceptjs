exports.config = {
  output: './output',
  helpers: {
    WebDriver: {
      url: 'http://localhost',
      browser: 'chrome',
      desiredCapabilities: {
        chromeOptions: {
          args: [ 
              "--disable-notifications",
              "--disable-geolocation",
          ],
          excludeSwitches: ['enable-automation']
          }
      },
      port: 4444,
      smartWait: 5000,
      restart: false,
      windowSize: 'maximize',
      timeouts: {
        script: 60000,
        'page load': 10000
      }
    },
    CustomCommands: {
      require: './helpers/custom_commands_helper.js'
    },
    GeneralHooks: {
      require: './helpers/general_hooks.helper.js'
    },
    REST: {
      endpoint: 'https://petstore.swagger.io/v2'
    },
    Files: {
      require: './helpers/files.helper.js'
    }
  },
  bootstrap: null,
  teardown: null,
  hooks: [],
  gherkin: {
    features: './features/**/*.feature',
    steps: require('./support/steps.js').getAll('./steps')
  },
  plugins: {
    screenshotOnFail: {
      enabled: true
    },
    wdio: {
      enabled: true,
      services: ['selenium-standalone']
    },
    allure: {
      enabled: true,
    }
  },
  name: 'test-automation'
}