#language: pt

@Web @Petz
Funcionalidade: Validação de ações na página web do site Petz

  Cenário: Validação de pesquisa simples
    Dado que estou na home do site da petz
    Quando pesquisar no campo de pesquisa pelo termo "Ração"
    E armazenar as informações do item 3 da lista de produtos
    E selecionar o item 3 da lista de produtos
    Então o nome na página do produto deve ser igual ao nome armazenado
    E o preço normal na página do produto deve ser igual ao preço normal armazenado
    E o preço para assinantes na página do produto deve ser igual ao preço para assinantes armazenado
    Quando adicionar o produto no meu carrinho
    Então o nome do produto no carrinho deve conter nome armazenado
    E o preço do produto no carrinho deve ser igual ao preço normal armazenado

  Cenário: Validação de pesquisa com massa de dados em arquivo
    Dado que estou na home do site da petz
    E recupero do meu arquivo csv os dados para pesquisa
    Então cada item da minha lista recuperada deve ter seus valores corretos adicionados no carrinho

  # ---------------------------------------------------------------------------------------------------
  # - O cenário acima foi feito para demonstrar a utililzação de arquivo conforme o exercicio,        -
  # - como são validações de muitos produtos, eu utilizaria o BDD ao meu favor para testar separado   -
  # - cada item, para que caso quebre um deles, o restante do teste prossiga, como no exemplo abaixo. -
  # ---------------------------------------------------------------------------------------------------

  Esquema do Cenário: Valição de pesquisa de produtos com base em uma lista que possuo
    Dado que estou na home do site da petz
    Quando pesquisar no campo de pesquisa pelo termo "<nome>"
    Então a página do produto deve ser aberta
    E o nome na página do produto deve ser igual ao nome "<nome>"
    E o fornecedor do produto deve ser igual ao fornecedor "<fornecedor>"
    E o preço normal na página do produto deve ser igual a "<preco_normal>"
    E o preço para assinantes na página do produto deve ser igual a "<preco_assinatura>"
    Quando adicionar o produto no meu carrinho
    Então o nome do produto no carrinho deve conter "<nome>"
    E o preço do produto no carrinho deve ser igual a "<preco_normal>"
    Exemplos:
      | nome                                                 | fornecedor   | preco_normal | preco_assinatura |
      | Perfume Lovely Pet Society para Cães e Gatos 50ml    | Pet Society  | R$ 88,90     | R$ 80,01         |
      | Bastão Petz para Calopsitas com Milho Verde 90g      | Petz         | R$ 15,99     | R$ 14,39         |
      | Areia Higiênica Clássica Petz para Gatos 3kg         | Petz         | R$ 23,99     | R$ 21,59         |
      | Bandeja Sanitária Petz Azul Turquesa para Gatos      | Petz         | R$ 89,99     | R$ 80,99         |
      | Porta Ração Petz Rosa 15kg                           | Petz         | R$ 69,89     | R$ 62,90         |
      | Periovet Gel Kit Vetnil 25g                          | Vetnil       | R$ 66,99     | R$ 60,29         |
      | Gel Dental Mundo Animal Good Care Haliclean          | Mundo Animal | R$ 48,90     | R$ 44,01         |
      | Gaiola Monaco Castelo para Calopsita Verde           | Monaco       | R$ 209,99    | R$ 188,99        |
      | Brinquedo Arranhador São Pet House Marrom para Gatos | São Pet      | R$ 299,99    | R$ 269,99        |
      | Dermotrat Creme Ourofino 20 g                        | Ourofino     | R$ 73,90     | R$ 66,51         |