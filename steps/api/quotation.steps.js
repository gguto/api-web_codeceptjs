const context = require('../../support/context');
const quotationRest = require('../../rest/quotation.rest');
const expect = require('chai').expect;

When('eu busco pela data {string} com o tipo de resposta {string}', async (quotationDate, responseType) => {
    const response = await quotationRest.getQuotationByParameters(quotationDate, responseType);
    context.values.dollarQuotation = response.data.value[0];
});

Then('deve retornar o valor da cotação pelo tipo {string}', async (quotationType) => {
    actor().printThisStep();
    const values = JSON.stringify(context.values.dollarQuotation);
    expect(values).contains(quotationType);
});

Then('o valor do tipo {string} não pode ser negativo', async (quotationType) => {
    actor().printThisStep();
    const value = context.values.dollarQuotation
    context.values.finalQuotationValue = value[quotationType];
    expect(value[quotationType]).is.not.below(0);
});

Then('a separação do valor deve ser por ponto com 4 casas decimais', async () => {
    actor().printThisStep();
    expect(context.values.finalQuotationValue).to.matches(/\d{1,2}[.]\d{1,4}$/g);
});