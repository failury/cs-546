const axios = require("axios");
function errorCheck(string) {
    if (!(typeof string === 'string')) {
        throw 'input is not a string';
    }
    if (string.trim().length == 0) {
        throw 'input is just empty spaces';
    }
}
async function getPeople() {
    const { data } = await axios.get('https://gist.githubusercontent.com/graffixnyc/a1196cbf008e85a8e808dc60d4db7261/raw/9fd0d1a4d7846b19e52ab3551339c5b0b37cac71/people.json')
    return data // this will be the array of people objects
}
async function getPersonById(id) {
    errorCheck(id);
    let people = await getPeople();
    for (const person of people) {
        if(person.id === id)
        return person;
    }
    throw 'person not found';
}
async function sameStreet(streetName, streetSuffix) {
   errorCheck(streetName);
   errorCheck(streetSuffix);
   streetName = streetName.toLowerCase();
   streetSuffix = streetSuffix.toLowerCase();
   let people = await getPeople();
   let res = [];
   for (const person of people) {
    let wstreetname = person.address.work.street_name.toLowerCase();
    let wstreetsuffix = person.address.work.street_suffix.toLowerCase();
    let hstreetname = person.address.home.street_name.toLowerCase();
    let hstreetsuffix = person.address.home.street_suffix.toLowerCase();
    if((wstreetname === streetName && wstreetsuffix === streetSuffix) || (hstreetname === streetName && hstreetsuffix === streetSuffix)){
        res.push(person);
    }
}
    if(res.length < 2) throw 'not enough people';
    return res;
}
async function manipulatSsn() {

}
async function sameBirthday(month, day) {

}

module.exports = {
    getPersonById,
    sameStreet
}