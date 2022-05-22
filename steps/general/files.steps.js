const expect = require('chai').expect;
const filesPage = require('../../pages/general/files.page');
const context = require('../../support/context');
const homePage = require('../../pages/petz/home.page');
const productPage = require('../../pages/petz/product.page');
const cartPage = require('../../pages/petz/cart.page');

When('recupero do meu arquivo csv os dados para pesquisa', async () => {
    context.values.csvAsJson = await filesPage.getFileAsJson('./files/dados_pesquisa.csv');
});

Then('cada item da minha lista recuperada deve ter seus valores corretos adicionados no carrinho', async () => {
    const products = context.values.csvAsJson;
    
    for (const product of products) {
        await homePage.fillSearchField(product.nome);
        await homePage.clickToSearch();

        expect(await productPage.getProductName()).to.be.equals(product.nome);
        expect(await productPage.getProductNormalPrice()).to.be.equals(product.preco_normal);
        expect(await productPage.getProductSignaturePrice()).to.be.equals(product.preco_assinatura);

        await productPage.clickAddToCart();

        expect(await cartPage.getProductName()).contains(product.nome);
        expect(await cartPage.getProductPrice()).to.be.equals(product.preco_normal);

        await cartPage.removeAllProducts();   
    }
});