let res = require('./data/restaurant');
let res1 = {};
let res2 = {};
async function main(){
    try{
        const restaurant = await res.create("The Saffron Lounge", "New York City, New York", "123-456-7890", "http://www.saffronlounge.com", "$$$$", ["Cuban", "Italian"], 3, {dineIn: true, takeOut: true, delivery: false});
        console.log (restaurant);
        res1 = restaurant;
    }catch(e){
        console.log (e);
    }
    try{
        const restaurant = await res.create("Chipotle", "New York City, New York", "189-221-6745", "http://www.chipotle.com", "$", ["Mexican"], 3, {dineIn: true, takeOut: false, delivery: false});
        console.log (restaurant);
        res2 = restaurant;
    }catch(e){
        console.log (e);
    }
    try{
        const restaurants = await res.getAll();
        console.log (restaurants);
    }catch(e){
        console.log (e);
    }
    try{
        const restaurant = await res.create("Subway", "New York City, New York", "340-789-4231", "http://www.subway.com", "$", ["Sandwiche", "Salad"], 3, {dineIn: true, takeOut: true, delivery: false});
        console.log (restaurant);
    }catch(e){
        console.log (e);
    }
    try{
        const restaurant = await res.rename(res1._id, "http://www.google.com");
        console.log (restaurant);
    }catch(e){
        console.log (e);
    }
    try{
        const restaurant = await res.remove(res2._id);
        console.log (restaurant);
    }catch(e){
        console.log (e);
    }
    try{
        const restaurants = await res.getAll();
        console.log (restaurants);
    }catch(e){
        console.log (e);
    }
    //error handling test
    try{
        const restaurant = await res.create(1, "New York City, New York", "123-456-7890", "http://www.saffronlounge.com", "$$$$", ["Cuban", "Italian"], 3, {dineIn: true, takeOut: true, delivery: false});
        console.log (restaurant);
    }catch(e){
        console.log (e);
    }
    try{
        const restaurant = await res.create("ssss", "New York City, New York", "123-456-7890", "http://www.saffronlounge.com", "    ", ["Cuban", "Italian"], 3, {dineIn: true, takeOut: true, delivery: false});
        console.log (restaurant);
    }catch(e){
        console.log (e);
    }
    try{
        const restaurant = await res.create("ssss", "New York City, New York", "123456-7890", "http://www.saffronlounge.com", "$$$$", ["Cuban", "Italian"], 3, {dineIn: true, takeOut: true, delivery: false});
        console.log (restaurant);
    }catch(e){
        console.log (e);
    }
    try{
        const restaurant = await res.create("ssss", "New York City, New York", "123-456-7890", "http://www.sf12.com", "$$$$", ["Cuban", "Italian"], 3, {dineIn: true, takeOut: true, delivery: false});
        console.log (restaurant);
    }catch(e){
        console.log (e);
    }
    try{
        const restaurant = await res.create("q", "New York City, New York", "123-456-7890", "http://www.saffronlounge.com", "$$$$", ["", "Italian"], 3, {dineIn: true, takeOut: true, delivery: false});
        console.log (restaurant);
    }catch(e){
        console.log (e);
    }
    try{
        const restaurant = await res.create("q", "New York City, New York", "123-456-7890", "http://www.saffronlounge.com", "$$$$", [1, "Italian"], 3, {dineIn: true, takeOut: true, delivery: false});
        console.log (restaurant);
    }catch(e){
        console.log (e);
    }
    try{
        const restaurant = await res.create("q", "New York City, New York", "123-456-7890", "http://www.saffronlounge.com", "$$$$", [], 3, {dineIn: true, takeOut: true, delivery: false});
        console.log (restaurant);
    }catch(e){
        console.log (e);
    }
    try{
        const restaurant = await res.create("q", "New York City, New York", "123-456-7890", "http://www.saffronlounge.com", "$$$$", ['aa'], "e", {dineIn: true, takeOut: true, delivery: false});
        console.log (restaurant);
    }catch(e){
        console.log (e);
    }
    try{
        const restaurant = await res.create("q", "New York City, New York", "123-456-7890", "http://www.saffronlounge.com", "$$$$", ['aa'], 3, "{dineIn: true, takeOut: true, delivery: false}");
        console.log (restaurant);
    }catch(e){
        console.log (e);
    }
    try{
        const restaurant = await res.create("q", "New York City, New York", "123-456-7890", "http://www.saffronlounge.com", "$$$$", ['aa'], 3, {dineIn: true, takeOut: "true", delivery: false});
        console.log (restaurant);
    }catch(e){
        console.log (e);
    }
    try{
        const restaurant = await res.remove(res2._id);
        console.log (restaurant);
    }catch(e){
        console.log (e);
    }
    try{
        const restaurant = await res.rename(res2._id,"http://www.saffronlounge.com");
        console.log (restaurant);
    }catch(e){
        console.log (e);
    }
    try{
        const restaurant = await res.rename(res2._id,"http://www.sae.com");
        console.log (restaurant);
    }catch(e){
        console.log (e);
    }
    try{
        const restaurant = await res.getId("q");
        console.log (restaurant);
    }catch(e){
        console.log (e);
    }
    try{
        const restaurant = await res.getId(res2._id);
        console.log (restaurant);
    }catch(e){
        console.log (e);
    }
    process.exit(0);
}

main();