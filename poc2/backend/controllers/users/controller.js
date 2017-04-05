const service = require('services/users');
const HttpStatus = require('http-status-codes');

//GET
function getAll(req, res) {
  service.getAll(req)
    .then(all => {
      res.status(HttpStatus.OK);
      return res.json(all);
    })
    .catch(error => {
      res.status(HttpStatus.INTERNAL_SERVER_ERROR);
      return res.json({ error: error.message || error.toString() });
    });

   console.log('>>>> chegouuu aquiii getAll');
}

//POST
function postUser(req, res) {
  service.postUser(req)
    .then(all => {
      res.status(HttpStatus.OK);
      return res.json(all);
    })
    .catch(error => {
      res.status(HttpStatus.INTERNAL_SERVER_ERROR);
      return res.json({ error: error.message || error.toString() });
    });

   console.log('>>>> chegouuu aquiii postUser');
}

//DELETE USER BY ID
function deleteUserById(req, res) {

  let id = req.params.id;

  service.deleteUserById(id)
    .then(all => {
      res.status(HttpStatus.OK);
      return res.json(all);
    })
    .catch(error => {
      res.status(HttpStatus.INTERNAL_SERVER_ERROR);
      return res.json({ error: error.message || error.toString() });
    });

   console.log('>>>> chegouuu aquiii deleteUserById');
}

//GET USER BY ID
function getUserById(req, res) {

  let id = req.params.id;

  service.getUserById(id)
    .then(all => {
      res.status(HttpStatus.OK);
      return res.json(all);
    })
    .catch(error => {
      res.status(HttpStatus.INTERNAL_SERVER_ERROR);
      return res.json({ error: error.message || error.toString() });
    });

   console.log('>>>> chegouuu aquiii getUserById');
}

//PUT USER BY ID ---> UPDATE <--
function putUser(req, res) {
  service.putUser(req)
    .then(all => {
      res.status(HttpStatus.OK);
      return res.json(all);
    })
    .catch(error => {
      res.status(HttpStatus.INTERNAL_SERVER_ERROR);
      return res.json({ error: error.message || error.toString() });
    });

   console.log('>>>> chegouuu aquiii putUserById');
}

//exports all methods
console.log('>>> module.exports do controller');

module.exports = { 
  getAll: getAll,
  postUser: postUser,
  deleteUserById: deleteUserById,
  getUserById: getUserById,
  putUser: putUser
};