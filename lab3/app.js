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
}

//call main
main();