const I = actor();

module.exports = {
    general: {
        siteBody: '//div[@class="site-wrap"]',
        product: '//li[@class="liProduct"][$position]'
    },
    inputs: {
        search: '//input[@class="inputPesquisa"]'
    },
    buttons: {
        search: '//button[@class="button-search"]'
    },
    labels: {
        productName: '//li[@class="liProduct"][$position]//h3[@class="nome_produto"]',
        productNormalPrice: '//li[@class="liProduct"][$position]//span[@class="display-price"]',
        productSignaturePrice: '//li[@class="liProduct"][$position]//span[@class="signature-price"]'
    },
    async accessUrl(url) {
        await I.amOnPage(url);
    },
    async isMyHomePage() {
        await I.wait(5);
        return await I.grabStatusElementIsVisible(this.general.siteBody, 30);
    },
    async fillSearchField(value) {
        await I.takeScreenshot();
        await I.fillField(this.inputs.search, value);
    },
    async clickToSearch() {
        await I.takeScreenshot();
        await I.waitForClickable(this.buttons.search);
        await I.click(this.buttons.search);
    },
    async clickOnProductByPosition(position) {
        await I.click((this.general.product).replace('$position', position));
    },
    async getProductNameByPosition(position) {
        return await I.grabTextFrom((this.labels.productName).replace('$position', position));
    },
    async getProductNormalPriceByPosition(position) {
        return await I.grabTextFrom((this.labels.productNormalPrice).replace('$position', position));
    },
    async getProducSignaturePriceByPosition(position) {
        return await I.grabTextFrom((this.labels.productSignaturePrice).replace('$position', position));
    }
}