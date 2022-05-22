# Projeto
Projeto de automação de testes utilizando Node juntamente com o framework CodeceptJS.

# Testes WEB
Nos testes web foram feitas validações de produto e adição no carrinho, utilizando como base o site petz.com.br;

# Testes API
No foi utilizada a api do banco central que retorna cotações de moedas;

## Pré-requisitos
Ferramentas para uso do projeto.

* Git
    * _Pré-requisito caso a intenção seja baixar o projeto via `clone` e/ou contribuir com o projeto._

* Node.js : v12+
    * _Pré-requisito para executar e instalar as dependências do projeto._

## Execução dos testes - Primeiros passos 

* Acesse o diretório raiz do projeto via terminal, o diretório raiz contém o arquivo `package.json`
* Instale as dependências do projeto:
```
npm install
```

* Execute a auditoria sobre as dependências para verificar itens de segurança:
```
npm audit
```

## Execução dos testes - Testes WEB
```
npx codeceptjs -c codecept.conf.js run --steps --grep @Web
```

## Execução dos testes - Testes API
```
npx codeceptjs -c codecept.conf.api.js run --steps --grep @Api
```

## Resultado dos testes

* Durante a execução dos teste é possível acompanhar o log no terminal que foi executado.


## Report
Após a execução dos testes os artefatos gerados são adicionados na pasta ./output, esta pasta é utilizada para gerar o relatorio com os logs e capturas de telas dos erros que ocorreram durante a execução.

Para instalar o Allure utilize o seguinte comando:
```
npm install -g allure-commandline --save-dev
```

Para gerar o relátorio após a execução dos testes, utilize o seguinte comando:
```
allure serve output
```
