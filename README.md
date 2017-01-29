# K010 | App para Amigo Secreto

A aplicação permite que sejam cadastradas pessoas com seus respectivos emails, com possibilidade de alteração
e remoção das mesma. Existe uma função (Sortear)  que sorteia os amigos respectivos de cada um para o amigo secreto e
após isso envia um email para cada um contendo o amigo sorteado.

As tecnologias chefes são:
* AngularJS
* NodeJs
* Swagger Tools
* Requestify
* Mongoose
* MongoDB
* [Mlab]
* [Sendgrid]

## BackEnd

Requer NodeJS (versão maior que 4.5.0) e NPM.

### Get Started

Dentro do diretório ```backend/```:

Rode o servidor usando o seguinte comando:

```
npm start
```

Para ver a documentação acesse:

```
open http://localhost:5000/docs
```

## FrontEnd

Para instalar as dependências é necessário ter o NodeJS e NPM instalados e as seguintes dependências:

```npm install -g grunt-cli bower yo generator-karma generator-angular```

### Get Started

Dentro do diretório ```frontend/```:

Instale as dependências de desenvolvimento com o seguinte comando:

```npm install```

Para instalar as demais dependências de front-end:

```bower install```

Para instalar as demais dependências de teste:

```npm install grunt-karma karma karma-phantomjs-launcher karma-jasmine jasmine-core phantomjs-prebuilt --save-dev```

#### Build & development

`grunt build` para buildar a aplicação and `grunt serve` para iniciar o servidor e rodar a aplicação.

#### Testing

`grunt test` para rodar os testes com Karma.
