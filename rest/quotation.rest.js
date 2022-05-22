const I = actor();

module.exports = {
  paths: {
    dollarQuotationEndpoint: 'CotacaoDolarDia(dataCotacao=@dataCotacao)?%40dataCotacao=%27$quotationDate%27&%24format=$responseType',
  },
  async getQuotationByParameters(quotationDate, responseType) {
    let path = this.paths.dollarQuotationEndpoint.replace('$quotationDate', quotationDate).replace('$responseType', responseType)
    return await I.sendGetRequest(path);
  }
};
