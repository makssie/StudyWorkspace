let arrUsers = [];

//GET
function getAll(req){
    console.log('>>>>>>metodo getAll no services');
    console.log('dados:', req.body);

    return Promise.resolve(arrUsers);

    // return users;
}

//POST
function postUser(req) {
    console.log('>>>>>>metodo postUser no services');
    console.log('>>>>>>>>>> req:', req.body);

    if (!req.body.id || req.body.id == '')
        return Promise.reject("ID not found!");

    if (!req.body.username || req.body.username == '')
        return Promise.reject("Username not found!");

    if (!req.body.email || req.body.email == '')
        return Promise.reject("Email not found!");

    const objUser = { 
        id: req.body.id,
        username: req.body.username,
        email: req.body.email
    };
    
    console.log('>>PASSOU PELO METODO POSTUSER');

    arrUsers.push(objUser);

    console.log('>> objuser id: ',objUser.id);
    console.log('>> objuser username: ',objUser.username);
    console.log('>> objuser email: ',objUser.email);
    
    return Promise.resolve(objUser);

}

//DELETE BY ID (DELETE ... WHERE)
 function deleteUserById(id) {
    console.log('>>>>>>metodo deleteUserById no services');

    if (!id || id == '')
        return Promise.reject("ID not found!");    
 
    let index = arrUsers.findIndex((x) => { return x.id == id; });

    if (index > -1) {
        arrUsers.splice(index, 1);

        return Promise.resolve(`User ${index} deleted`);
    } else {
        // console.log("nao achou id!");
        return Promise.reject("User not found!");
    }

 }

//GET USER BY ID (SELECT .. WHERE)
function getUserById(id) {
    console.log('>>>>>>metodo getUserById no services');

    if (!id || id == '')
        return Promise.reject("ID not found!");    
 
    let objUser = arrUsers.filter((x) => { return x.id == id; })[0];

    console.log("objUser==",objUser);
    console.log("arrUsers==",arrUsers);

    if (objUser) {
        // console.log("achou!");
        return Promise.resolve(objUser);
    } else {
        // console.log("nao achou id!");
        return Promise.reject("User not found!");
    }
}

//PUT USER BY ID (UPDATE)
 function putUser(req) {
    console.log('>>>>>>metodo putUser no services');
    console.log('>>>>>>>>>> req:', req.body);

    if (!req.body.id || req.body.id == '')
        return Promise.reject("ID not found!");

    if (!req.body.username || req.body.username == '')
        return Promise.reject("Username not found!");

    if (!req.body.email || req.body.email == '')
        return Promise.reject("Email not found!");

    const objUser = { 
        id: req.body.id,
        username: req.body.username,
        email: req.body.email
    };
    
    // declaracao de variaveis no js
    // var, const, let

    // .findIndex -> padrao EC6
    let index = arrUsers.findIndex((x) => { return x.id == objUser.id; });

    console.log("index: ",index);

    if (index > -1) {
        arrUsers[index] = objUser;

        return Promise.resolve("User updated");
    } else {
        return Promise.reject("User rejected - not found");
    }
}

//expõe os metodos
module.exports = {
    getAll: getAll,
    postUser: postUser,
    deleteUserById: deleteUserById,
    getUserById: getUserById,
    putUser: putUser
};