let p = require('./people');
let axios = require("axios");
function findpersonbyid(people,id){
    for (const person of people) {
        if(person.id === id)
        return person;
    }
    throw 'person not found';
}
async function listShareholders(){
    if(arguments.length > 0){
        throw 'should not provide any argument';
    }
    let stocks = await axios.get('https://gist.githubusercontent.com/graffixnyc/8c363d85e61863ac044097c0d199dbcc/raw/7d79752a9342ac97e4953bce23db0388a39642bf/stocks.json');
    stocks = Object.values(stocks.data);
    let people = await p.getPeople();
    for (const s of stocks) {
        let array = [];
        for (const holder of s.shareholders) {
            let person = findpersonbyid(people, holder.userId);
            let obj = {'first_name': person.first_name, 'last_name': person.last_name, 'number_of_shares': holder.number_of_shares};
            array.push(obj);
        }
        s.shareholders = array;
    }
    return stocks;
}

async function topShareholder(stockName) {
    p.errorCheck(stockName);
    let stocks = await listShareholders();
    for (const stock of stocks) {
        if( stock.stock_name === stockName){
            let sh = stock.shareholders;
            if(sh.length == 0){
                return stockName + " currently has no shareholders."
            }
            let max = sh.reduce((prev, current) =>{
                return (prev.number_of_shares > current.number_of_shares) ? prev : current
            });
            
            return 'With ' + max.number_of_shares + ' shares in ' + stockName + ', ' + max.first_name + ' ' + max.last_name + ' is the top shareholder.';
        }
    }
    throw 'the stock name cannot be found';
}



async function listStocks(firstName, lastName) {
    p.errorCheck(firstName);
    p.errorCheck(lastName);
    let res = [];
    let people = await p.getPeople();
    let pobj = null;
    for (const person of people) {
        if(person.first_name === firstName && person.last_name === lastName){
            pobj = person;
        }  
    }
    if (pobj == null){
        throw 'person not found';
    }
    let stocks = await axios.get('https://gist.githubusercontent.com/graffixnyc/8c363d85e61863ac044097c0d199dbcc/raw/7d79752a9342ac97e4953bce23db0388a39642bf/stocks.json');
    stocks = Object.values(stocks.data);
    for (const s of stocks) {
        for (const sh of s.shareholders) {
            if(sh.userId === pobj.id){
                let obj = {'stock_name': s.stock_name, 'number_of_shares': sh.number_of_shares};
                res.push(obj);
            }
        }
    }
    if (res.length == 0){
        throw 'the person does not own any share in the list';
    }
    return res;

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
    listShareholders,
    topShareholder,
    listStocks,
    getStockById
}