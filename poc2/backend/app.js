/*
RESTFul (HTTP)

GET	    /api/users	Buscar todos os users (GET ALL)
POST	/api/users	Criar um novo user    
DELETE	/api/users/:userId	Deletar um user pelo ID
GET	    /api/users/:userId	Buscar um user pelo ID
PUT	    /api/users/:userId	Atualizar um user pelo ID
*/
const path = require('path');
require('app-module-path').addPath(path.join(__dirname,'.'));

const express = require('express');
let app = express();
const controllers = require('./controllers');

var bodyParser = require('body-parser');

//Configuration
app.use(bodyParser.json());

//using controller
app.use(controllers);

//App available
app.listen(9002, () => {
    console.log('APP Ready!');
});
