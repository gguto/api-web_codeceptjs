const I = actor();

module.exports = {
    labels: {
        productName: '//div[contains(@class, "prod-info")]/h1',
        productBrand: '//div[contains(@class, "prod-info")]//a/span[@itemprop="name"]',
        productNormalPrice: '//div[@class="price-box"]//div[@class="price-current"]',
        productSignaturePrice: '//div[@class="price-box"]//span[@class="price-subscriber"]'
    },
    buttons: {
        addToCart: '#adicionarAoCarrinho'
    },
    divs: {
        productSpecifications: '#especificacoes'
    },
    async getProductName() {
        await I.waitForElement(this.labels.productName, 10);
        return await I.grabTextFrom(this.labels.productName);
    },
    async getProductBrandName() {
        await I.waitForElement(this.labels.productBrand, 10);
        return await I.grabTextFrom(this.labels.productBrand);
    },
    async getProductNormalPrice() {
        await I.waitForElement(this.labels.productNormalPrice, 10);
        return await I.grabTextFrom(this.labels.productNormalPrice);
    },
    async getProductSignaturePrice() {
        await I.waitForElement(this.labels.productSignaturePrice, 10);
        return await I.grabTextFrom(this.labels.productSignaturePrice);
    },
    async clickAddToCart() {
        await I.waitForElement(this.buttons.addToCart, 10);
        await I.click(this.buttons.addToCart);
    },
    async isProductSpecificationsShowed() {
        await I.waitForElement(this.divs.productSpecifications, 10);
        return await I.grabStatusElementIsVisible(this.divs.productSpecifications);
    }
}