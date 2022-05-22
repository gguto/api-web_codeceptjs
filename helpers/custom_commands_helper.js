const Helper = require('@codeceptjs/helper');

const moment = require('moment');
const fs = require('fs-extra');

class CustomCommands extends Helper {
  async grabStatusElementIsVisible(locator, time) {
    const { WebDriver } = this.helpers;
    try {
      await WebDriver.waitForVisible(locator, time);
      return true;
    } catch (error) {
      return false;
    }
  }

  async takeScreenshot() {
    const { WebDriver } = this.helpers
    const { browser } = WebDriver

    const timestamp = await moment().format('YYYY-MM-DD HH:mm:ss');
    await fs.ensureDirSync('output/screenshots/');
    const filepath = 'output/screenshots/' + timestamp + '.png';
    await browser.saveScreenshot(filepath);
    await console.log('Screenshot saved');
    process.emit('test:screenshot', filepath);
  }

  async printThisStep() {
  }
}

module.exports = CustomCommands;

