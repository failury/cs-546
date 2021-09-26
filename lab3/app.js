let people = require('./people');
let stocks = require('./stocks');
async function main(){
    // //people
    // // getpersonbyid
    // try{
    //     const peopledata = await people.getPersonById("7989fa5e-8f3f-458d-ad58-23c8d9ef5a10");
    //     console.log (peopledata);
    // }catch(e){
    //     console.log (e);
    // }
    // try{
    //     const peopledata = await people.getPersonById(-1);
    //     console.log (peopledata);
    // }catch(e){
    //     console.log (e);
    // }
    // try{
    //     const peopledata = await people.getPersonById();
    //     console.log (peopledata);
    // }catch(e){
    //     console.log (e);
    // }
    // try{
    //     const peopledata = await people.getPersonById('7989fa5e-5617-43f7-a931-46036f9dbcff');
    //     console.log (peopledata);
    // }catch(e){
    //     console.log (e);
    // }
    // try{
    //     const peopledata = await people.getPersonById('                                      ');
    //     console.log (peopledata);
    // }catch(e){
    //     console.log (e);
    // }



    // //samestreet
    // try{
    //     const peopledata = await people.sameStreet("Sutherland", "Point"); 
    //     console.log (peopledata);
    // }catch(e){
    //     console.log (e);
    // }
    // try{
    //     const peopledata = await people.sameStreet(1,"Street"); // Throws Error
    //     console.log (peopledata);
    // }catch(e){
    //     console.log (e);
    // }
    // try{
    //     const peopledata = await people.sameStreet("Street", 1); // Throws Error
    //     console.log (peopledata);
    // }catch(e){
    //     console.log (e);
    // }
    // try{
    //     const peopledata = await people.sameStreet("Street"); // Throws Error
    //     console.log (peopledata);
    // }catch(e){
    //     console.log (e);
    // }
    // try{
    //     const peopledata = await people.sameStreet(); // Throws Error
    //     console.log (peopledata);
    // }catch(e){
    //     console.log (e);
    // }
    // try{
    //     const peopledata = await people.sameStreet("Crownhardt","Park"); // Throws Error since there are not at least two people that live or work on Crownhardt Park
    //     console.log (peopledata);
    // }catch(e){
    //     console.log (e);
    // }
    // //manipulate ssn
    // try{
    //     const peopledata = await people.manipulatSsn();
    //     console.log (peopledata);
    // }catch(e){
    //     console.log (e);
    // }


    // //same birthday
    // try{
    //     const peopledata = await people.sameBirthday(09, 25);// Returns: ['Khalil Ovitts',  'Erny Van Merwe', 'Emanuel Saben', 'Iorgos Tembridge']
    //     console.log (peopledata);
    // }catch(e){
    //     console.log (e);
    // }
    // try{
    //     const peopledata = await people.sameBirthday(9, 25); // Returns: ['Khalil Ovitts',  'Erny Van Merwe', 'Emanuel Saben', 'Iorgos Tembridge']
    //     console.log (peopledata);
    // }catch(e){
    //     console.log (e);
    // }
    // try{
    //     const peopledata = await people.sameBirthday("09", "25"); // Returns: ['Khalil Ovitts',  'Erny Van Merwe', 'Emanuel Saben', 'Iorgos Tembridge']
    //     console.log (peopledata);
    // }catch(e){
    //     console.log (e);
    // }
    // try{
    //     const peopledata = await people.sameBirthday(09, 31); // Throws Error: There are not 31 days in Sept
    //     console.log (peopledata);
    // }catch(e){
    //     console.log (e);
    // }
    // try{
    //     const peopledata = await people.sameBirthday(13, 25); // Throws Error: Month > 12
    //     console.log (peopledata);
    // }catch(e){
    //     console.log (e);
    // }
    // try{
    //     const peopledata = await people.sameBirthday(02, 29); // Throws Error: There are not 29 days in Feb
    //     console.log (peopledata);
    // }catch(e){
    //     console.log (e);
    // }
    // try{
    //     const peopledata = await people.sameBirthday("09", "31"); // Throws Error: There are not 31 days in Sept
    //     console.log (peopledata);
    // }catch(e){
    //     console.log (e);
    // }
    // try{
    //     const peopledata = await people.sameBirthday("      ", "25"); // Throws Error
    //     console.log (peopledata);
    // }catch(e){
    //     console.log (e);
    // }
    // try{
    //     const peopledata = await people.sameBirthday(); // Throws Error
    //     console.log (peopledata);
    // }catch(e){
    //     console.log (e);
    // }





    // //stocks
    // //listShareholders
    // try{
    //     const stockdata = await stocks.listShareholders();
    //     console.log (stockdata);
    // }catch(e){
    //     console.log (e);
    // }
    // try{
    //     const stockdata = await stocks.listShareholders('7283e5d6-7481-41cb-83b3-5a4a2da34717');// Throws Error
    //     console.log (stockdata);
    // }catch(e){
    //     console.log (e);
    // }
    // try{
    //     const stockdata = await stocks.listShareholders('Nuveen Preferred and Income 2022 Term Fund');// Throws Error
    //     console.log (stockdata);
    // }catch(e){
    //     console.log (e);
    // }


    // //topShareholder
    // try{
    //     const stockdata = await stocks.topShareholder('Powell Industries, Inc.'); 
    //     console.log (stockdata);
    // }catch(e){
    //     console.log (e);
    // }
    // try{
    //     const stockdata = await stocks.topShareholder(); // Throws Error
    //     console.log (stockdata);
    // }catch(e){
    //     console.log (e);
    // }
    // //listStocks
    // try{
    //     const stockdata = await stocks.listStocks("Grenville", "Pawelke" ); 
    //     console.log (stockdata);
    // }catch(e){
    //     console.log (e);
    // }
    // try{
    //     const stockdata = await stocks.listStocks(1,2); // Throws Error
    //     console.log (stockdata);
    // }catch(e){
    //     console.log (e);
    // }
    //getStockById
        try{
        const stockdata = await stocks.getStockById("f652f797-7ca0-4382-befb-2ab8be914ff0");
        console.log (stockdata);
    }catch(e){
        console.log (e);
    }
}

//call main
main();