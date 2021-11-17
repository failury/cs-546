const mongoCollections = require('./../config/mongoCollections');
let { ObjectId } = require('mongodb');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const users = mongoCollections.users;
var errorCheck = function (string) {
    string = string.trim();
    if (!(typeof string === 'string')) {
        throw 'Input is not an string';
    }
    if (string.length == 0) {
        throw 'Empty string';
    }
}
async function createUser(username, password){
    username = username.trim();
    password = password.trim();
    errorCheck(username);
    if(username.trim().length < 4){throw 'username length must be greater than 4'};
    if (!username.trim().match(/^[0-9a-zA-Z]+$/)){throw 'username contains non alphanumeric '}
    errorCheck(password);
    if(password.trim().length < 6){throw 'username length must be greater than 4'};
    const usersCollection = await users();
    const List = await usersCollection.find({}).toArray();
    let userlist = [];
    List.forEach(element => {
        userlist.push(element.username.toLowerCase());
    });
    if (userlist.includes(username.toLowerCase())){
        throw 'username existed'
    }
    const hash = await bcrypt.hash(password, saltRounds);
    let obj = {'username': username, 'password': hash};
    let insertInfo = await usersCollection.insertOne(obj);
    if (insertInfo.insertedCount === 0) throw 'Could not add user';
    return {userInserted: true};
}


async function checkUser(username, password) {
    username = username.trim();
    password = password.trim();
    errorCheck(username);
    if(username.trim().length < 4){throw 'username length must be greater than 4'};
    if (!username.trim().match(/^[0-9a-z]+$/)){throw 'username contains non alphanumeric '}
    errorCheck(password);
    if(password.trim().length < 6){throw 'username length must be greater than 4'};
    const usersCollection = await users();
    const res = await usersCollection.findOne({ username: username });
    if (res === null) throw 'Either the username or password is invalid';
    compare = await bcrypt.compare(password, res.password);
    if(compare){
        return {authenticated: true};
    }
    throw "Either the username or password is invalid";
    
}


module.exports = {
    createUser,
    checkUser
}