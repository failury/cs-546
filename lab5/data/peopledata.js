const axios = require("axios");
function errorCheck(string) {
    if (!(typeof string === 'string')) {
        throw 'input is not a string';
    }
    if (string.trim().length == 0) {
        throw 'input is just empty spaces';
    }
}
function isValidDate(dateString) {
    //https://stackoverflow.com/a/35413963
    var regEx = /^\d{4}-\d{2}-\d{2}$/;
    if(!dateString.match(regEx)) return false;  // Invalid format
    var d = new Date(dateString);
    var dNum = d.getTime();
    if(!dNum && dNum !== 0) return false; // NaN value, Invalid date
    return d.toISOString().slice(0,10) === dateString;
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
    if(arguments.length > 0){
        throw 'should not provide any argument';
    }
    let people = await getPeople();
    let objarray = [];
    let ssnarray = [];
    for (const p of people) {
        let obj = {};
        obj['Name'] = {'first_name' : p.first_name, 'last_name': p.last_name};
        obj['ssn'] = parseInt(p.ssn.replace(/-/g, "").split('').sort().join(''), 10);
        objarray.push(obj);
        ssnarray.push(obj['ssn']);
    }
    let compare = (a , b) =>{
        if ( a.ssn < b.ssn ){
            return -1;
          }
          if ( a.ssn > b.ssn ){
            return 1;
          }
          return 0;
    }
    objarray.sort(compare);
    let average = ssnarray.reduce((a, b) => a + b) / ssnarray.length;
    let last = objarray.length - 1;
    let res = {'highest':{'first_name' : objarray[last].Name.first_name, 'last_name': objarray[last].Name.last_name},
    'lowest':{'first_name' : objarray[0].Name.first_name, 'last_name': objarray[0].Name.last_name},
    'average': Math.floor(average)
};
    return res;

}
async function sameBirthday(month, day) {
    month = parseInt(month,10);
    day = parseInt(day,10);
    if(isNaN(month) || isNaN(day)){
        throw 'input is not a number';
    }
    if(month.toString().length == 1) {
        month = "0" + month;
    }
    let datestring = "2013-" + month + "-" + day;
    if(!isValidDate(datestring)){
        throw 'invalid date';
    }
    month = parseInt(month,10);
    let people = await getPeople();
    let res = [];
    for (const p of people) {
        let pdate = new Date(Date.parse(p.date_of_birth));
        if(pdate.getMonth() +1 === month && pdate.getDate() === day){
            let name = p.first_name + " " + p.last_name;
            res.push(name);
        }
    }
    if(res.length == 0){
        throw 'cant find people with input birthday';
    }
    return res;
}

module.exports = {
    getPeople,
    errorCheck,
    getPersonById,
    sameStreet,
    manipulatSsn,
    sameBirthday
}