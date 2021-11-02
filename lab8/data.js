const md5 = require('blueimp-md5');
const axios = require("axios");
const publickey = '3f978930d388a24b556bd2dcdb7cb8e2';
const privatekey = '2eb4cd356b7b7a1982b1a24511280dc5995fd53b';


var StringCheck = function (string) {
    if (!(typeof string === 'string')) {
        throw 'Input is not an string';
    }
    string = string.trim();
    if (string.length == 0) {
        throw 'Empty string';
    }
}

async function List(id) {
    StringCheck(id);
    const ts = new Date().getTime();
    const stringToHash = ts + privatekey + publickey;
    const hash = md5(stringToHash);
    const baseUrl = ' https://gateway.marvel.com/v1/public/characters/' + id;
    const url = baseUrl + '?ts=' + ts + '&apikey=' + publickey + '&hash=' + hash;
    const { data } = await axios.get(url);
    let obj = data.data.results;
    let res = {name: obj[0].name, description: obj[0].description, img:obj[0].thumbnail.path + "."+ obj[0].thumbnail.extension ,comics:[]};
    obj[0].comics.items.forEach(element => {
        res.comics.push({name:element.name})
    });
    return res;
}
async function Search(character) {
    StringCheck(character);
    const ts = new Date().getTime();
    const stringToHash = ts + privatekey + publickey;
    const hash = md5(stringToHash);
    const baseUrl = 'https://gateway.marvel.com/v1/public/characters?nameStartsWith=' + character;
    const url = baseUrl + '&ts=' + ts + '&apikey=' + publickey + '&hash=' + hash;
    const { data } = await axios.get(url);
    let obj = data.data.results;
    let res = [];
    obj.forEach(element => {
        res.push({link:"characters/" + element.id, name:element.name});
    });
    return res;
}

module.exports = {
    Search,
    List
}