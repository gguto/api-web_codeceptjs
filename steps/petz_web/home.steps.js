const homePage = require('../../pages/petz/home.page');
const context = require('../../support/context');

Given('que estou na home do site da petz', async () => {
  await homePage.accessUrl('https://www.petz.com.br');
});

When('pesquisar no campo de pesquisa pelo termo {string}', async (value) => {
  context.values.filteredProduct = value;
  await homePage.fillSearchField(value);
  await homePage.clickToSearch();
});

When('armazenar as informações do item {int} da lista de produtos', async (position) => {
  context.values.selectProductName = await homePage.getProductNameByPosition(position);
  context.values.selectProductNormalPrice = await homePage.getProductNormalPriceByPosition(position);
  context.values.selectProductSignaturePrice = await homePage.getProducSignaturePriceByPosition(position);
});

When('selecionar o item {int} da lista de produtos', async (position) => {
  await homePage.clickOnProductByPosition(position);
});