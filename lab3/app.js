let people = require('./people');
async function main(){
    // getpersonbyid
    try{
        const peopledata = await people.getPersonById("7989fa5e-8f3f-458d-ad58-23c8d9ef5a10");
        console.log (peopledata);
    }catch(e){
        console.log (e);
    }
    try{
        const peopledata = await people.getPersonById(-1);
        console.log (peopledata);
    }catch(e){
        console.log (e);
    }
    try{
        const peopledata = await people.getPersonById();
        console.log (peopledata);
    }catch(e){
        console.log (e);
    }
    try{
        const peopledata = await people.getPersonById('7989fa5e-5617-43f7-a931-46036f9dbcff');
        console.log (peopledata);
    }catch(e){
        console.log (e);
    }
    try{
        const peopledata = await people.getPersonById('                                      ');
        console.log (peopledata);
    }catch(e){
        console.log (e);
    }



    //samestreet
    try{
        const peopledata = await people.sameStreet("Sutherland", "Point"); 
        console.log (peopledata);
    }catch(e){
        console.log (e);
    }
    try{
        const peopledata = await people.sameStreet(1,"Street"); // Throws Error
        console.log (peopledata);
    }catch(e){
        console.log (e);
    }
    try{
        const peopledata = await people.sameStreet("Street", 1); // Throws Error
        console.log (peopledata);
    }catch(e){
        console.log (e);
    }
    try{
        const peopledata = await people.sameStreet("Street"); // Throws Error
        console.log (peopledata);
    }catch(e){
        console.log (e);
    }
    try{
        const peopledata = await people.sameStreet(); // Throws Error
        console.log (peopledata);
    }catch(e){
        console.log (e);
    }
    try{
        const peopledata = await people.sameStreet("Crownhardt","Park"); // Throws Error since there are not at least two people that live or work on Crownhardt Park
        console.log (peopledata);
    }catch(e){
        console.log (e);
    }
    //manipulate ssn
    try{
        const peopledata = await people.manipulatSsn();
        console.log (peopledata);
    }catch(e){
        console.log (e);
    }


    //same birthday
    try{
        const peopledata = await people.sameBirthday(09, 25);// Returns: ['Khalil Ovitts',  'Erny Van Merwe', 'Emanuel Saben', 'Iorgos Tembridge']
        console.log (peopledata);
    }catch(e){
        console.log (e);
    }
    try{
        const peopledata = await people.sameBirthday(9, 25); // Returns: ['Khalil Ovitts',  'Erny Van Merwe', 'Emanuel Saben', 'Iorgos Tembridge']
        console.log (peopledata);
    }catch(e){
        console.log (e);
    }
    try{
        const peopledata = await people.sameBirthday("09", "25"); // Returns: ['Khalil Ovitts',  'Erny Van Merwe', 'Emanuel Saben', 'Iorgos Tembridge']
        console.log (peopledata);
    }catch(e){
        console.log (e);
    }
    try{
        const peopledata = await people.sameBirthday(09, 31); // Throws Error: There are not 31 days in Sept
        console.log (peopledata);
    }catch(e){
        console.log (e);
    }
    try{
        const peopledata = await people.sameBirthday(13, 25); // Throws Error: Month > 12
        console.log (peopledata);
    }catch(e){
        console.log (e);
    }
    try{
        const peopledata = await people.sameBirthday(02, 29); // Throws Error: There are not 29 days in Feb
        console.log (peopledata);
    }catch(e){
        console.log (e);
    }
    try{
        const peopledata = await people.sameBirthday("09", "31"); // Throws Error: There are not 31 days in Sept
        console.log (peopledata);
    }catch(e){
        console.log (e);
    }
    try{
        const peopledata = await people.sameBirthday("      ", "25"); // Throws Error
        console.log (peopledata);
    }catch(e){
        console.log (e);
    }
    try{
        const peopledata = await people.sameBirthday(); // Throws Error
        console.log (peopledata);
    }catch(e){
        console.log (e);
    }
}

//call main
main();