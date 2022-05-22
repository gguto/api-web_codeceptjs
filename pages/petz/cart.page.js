const I = actor();

module.exports = {
    labels: {
        productName: '//div[contains(@class, "produtosCarrinho")]//td[@class="td-resumo"]',
        productPrice: '//div[contains(@class, "produtosCarrinho")]//td[@class="preco"]'
    },
    buttons: {
        deleteItem: '//i[contains(@class, "delete-item-pedido")]'
    },
    async getProductName() {
        await I.waitForElement(this.labels.productName, 10);
        return await I.grabTextFrom(this.labels.productName);
    },
    async getProductPrice() {
        await I.waitForElement(this.labels.productPrice, 10);
        return await I.grabTextFrom(this.labels.productPrice);
    },
    async removeAllProducts() {
        let numberElements = await I.grabNumberOfVisibleElements(this.buttons.deleteItem);
        for (let i = numberElements; i > 0; i--) {
            await I.click(this.buttons.deleteItem);
        }
    }
}