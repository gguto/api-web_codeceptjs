const expect = require('chai').expect;
const cartPage = require('../../pages/petz/cart.page');
const context = require('../../support/context');

Then('o nome do produto no carrinho deve conter nome armazenado', async () => {
    //Aqui foi utilizado o contains pois no carrinho muitas vezes o nome é acompanhado da unidade de medida.
    expect(await cartPage.getProductName()).contains(context.values.selectProductName);
});

Then('o nome do produto no carrinho deve conter {string}', async (name) => {
    //Aqui foi utilizado o contains pois no carrinho muitas vezes o nome é acompanhado da unidade de medida.
    expect(await cartPage.getProductName()).contains(name);
});

Then('o preço do produto no carrinho deve ser igual ao preço normal armazenado', async () => {
    expect(await cartPage.getProductPrice()).to.be.equals(context.values.selectProductNormalPrice);
});

Then('o preço do produto no carrinho deve ser igual a {string}', async (price) => {
    expect(await cartPage.getProductPrice()).to.be.equals(price);
});