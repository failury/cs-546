let res = require('./restaurants');
let rev = require('./review');
let res1 = {};
let res2 = {};
let res3 = {};
async function main(){
    try{
        const restaurant = await res.create("The Saffron Lounge", "New York City, New York", "123-456-7890", "http://www.saffronlounge.com", "$$$$", ["Cuban", "Italian"], {dineIn: true, takeOut: true, delivery: false});
        res1 = restaurant;
        // console.log (restaurant);
    }catch(e){
        console.log (e);
    }
    try{
        const restaurant = await res.create("Chipotle", "New York City, New York", "189-221-6745", "http://www.chipotle.com", "$", ["Mexican"], {dineIn: true, takeOut: false, delivery: false});
        res3 = restaurant;
        // console.log (restaurant);
    }catch(e){
        console.log (e);
    }
    try{
        const restaurant = await res.create("Subway", "New York City, New York", "340-789-4231", "http://www.subway.com", "$", ["Sandwiche", "Salad"], {dineIn: true, takeOut: true, delivery: false});
        // console.log (restaurant);
    }catch(e){
        console.log (e);
    }




    try{
        const review = await rev.create(res1._id,'review1','jack',3,'10/19/2021','This place was great! the staff is top notch and the food was delicious!  They really know how to treat their customers')
        // console.log (review);
    }catch(e){
        console.log (e);
    }
    try{
        const review = await rev.create(res1._id,'review3','jack',2,'10/19/2021','This place was great! the staff is top notch and the food was delicious!  They really know how to treat their customers')
        // console.log (review);
    }catch(e){
        console.log (e);
    }
    try{
        const review = await rev.create(res1._id,'review2','jack',1,'10/19/2021','This place was great! the staff is top notch and the food was delicious!  They really know how to treat their customers')
        res2 = review;
        // console.log (review);
    }catch(e){
        console.log (e);
    }


    try{
        const review = await rev.getAll(res3._id);
        // console.log (review);
    }catch(e){
        console.log (e);
    }
    try{
        const review = await rev.get(res2.reviews[0]._id);
        // console.log (review);
    }catch(e){
        console.log (e);
    }
    try{
        const review = await rev.remove(res2.reviews[0]._id);
        // console.log (review);
    }catch(e){
        console.log (e);
    }
}
main();