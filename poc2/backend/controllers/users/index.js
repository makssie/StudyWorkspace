const express = require('express');
const router = express.Router();
const ctrl = require('./controller');

router.get('/', ctrl.getAll);    //Recupera todos
router.post('/', ctrl.postUser); //Inserer
router.delete('/:id', ctrl.deleteUserById); //Deleta com ID (where)
router.get('/:id', ctrl.getUserById); //Recupera com ID (where)
router.put('/', ctrl.putUser); //Atualiza com ID (where)

//expõe
module.exports = router;