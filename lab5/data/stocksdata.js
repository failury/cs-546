let p = require('./peopledata');
let axios = require("axios");
function findpersonbyid(people,id){
    for (const person of people) {
        if(person.id === id)
        return person;
    }
    throw 'person not found';
}
async function getStocks(){
    if(arguments.length > 0){
        throw 'should not provide any argument';
    }
    let stocks = await axios.get('https://gist.githubusercontent.com/graffixnyc/8c363d85e61863ac044097c0d199dbcc/raw/7d79752a9342ac97e4953bce23db0388a39642bf/stocks.json');
    stocks = Object.values(stocks.data);
    return stocks;
}

async function getStockById(id) {
    p.errorCheck(id);
    let stocks = await axios.get('https://gist.githubusercontent.com/graffixnyc/8c363d85e61863ac044097c0d199dbcc/raw/7d79752a9342ac97e4953bce23db0388a39642bf/stocks.json');
    stocks = Object.values(stocks.data);
    for (const s of stocks) {
        if(s.id === id){
            return s;
        }
    }
    throw 'stock not found';
}
module.exports = {
    getStocks,
    getStockById
}