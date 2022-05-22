const expect = require('chai').expect;
const productPage = require('../../pages/petz/product.page');
const context = require('../../support/context');

Then('o nome na página do produto deve ser igual ao nome armazenado', async () => {
    expect(await productPage.getProductName()).to.be.equals(context.values.selectProductName);
});

Then('o nome na página do produto deve ser igual ao nome {string}', async (name) => {
    expect(await productPage.getProductName()).to.be.equals(name);
});

Then('o fornecedor do produto deve ser igual ao fornecedor {string}', async (brand) => {
    expect(await productPage.getProductBrandName()).to.be.equals(brand);
});

Then('o preço normal na página do produto deve ser igual ao preço normal armazenado', async () => {
    expect(await productPage.getProductNormalPrice()).to.be.equals(context.values.selectProductNormalPrice);
});

Then('o preço normal na página do produto deve ser igual a {string}', async (normalPrice) => {
    expect(await productPage.getProductNormalPrice()).to.be.equals(normalPrice);
});

Then('o preço para assinantes na página do produto deve ser igual ao preço para assinantes armazenado', async () => {
    expect(await productPage.getProductSignaturePrice()).to.be.equals(context.values.selectProductSignaturePrice);
});

Then('o preço para assinantes na página do produto deve ser igual a {string}', async (signaturePrice) => {
    expect(await productPage.getProductSignaturePrice()).to.be.equals(signaturePrice);
});

Then('adicionar o produto no meu carrinho', async () => {
    await productPage.clickAddToCart();
});

Then('a página do produto deve ser aberta', async () => {
    expect(await productPage.getProductName()).to.be.equals(context.values.filteredProduct);
    expect(await productPage.isProductSpecificationsShowed()).to.be.true;
});