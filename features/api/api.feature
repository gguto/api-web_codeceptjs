#language:pt

@Api
Funcionalidade: Validar endpoint de cotação de dolar com base na documentação disposta no swagger : https://olinda.bcb.gov.br/olinda/servico/PTAX/versao/v1/swagger-ui3#/

  Esquema do Cenário: Cotação do dolar por parâmetros
    Quando eu busco pela data "<data_cotacao>" com o tipo de resposta "<tipo_resposta>"
    Então deve retornar o valor da cotação pelo tipo "<tipo>"
    E o valor do tipo "<tipo>" não pode ser negativo
    E a separação do valor deve ser por ponto com 4 casas decimais
    Exemplos:
      | data_cotacao | tipo_resposta | tipo          |
      | 10-22-2019   | json          | cotacaoCompra |
      | 10-22-2019   | json          | cotacaoVenda  |