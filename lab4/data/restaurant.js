
const mongoCollections = require('./../config/mongoCollections');
let { ObjectId } = require('mongodb');
const restaurants = mongoCollections.restaurants;
var StringCheck = function (string) {
    if (!(typeof string === 'string')) {
        throw 'Input is not an string';
    }
    string = string.trim();
    if (string.length == 0) {
        throw 'Empty string';
    }
}
async function create(name, location, phoneNumber, website, priceRange, cuisines, overallRating, serviceOptions){
    let args = Array.prototype.slice.call(arguments);
    if (args.length !== 8){throw 'Some of the inputs is not provided';}
    args.slice(0, 5).forEach(StringCheck);
    if (!phoneNumber.match(/^([0-9]{3})[-]([0-9]{3})[-]([0-9]{4})$/)){throw 'invalid phone number';}
    let urlstart = 'http://www.';
    let urlend = '.com';
    if (website.length < 5 + urlend.length + urlstart.length){throw 'invlid URL';}
    if(website.slice(0,11) !== urlstart || website.slice(website.length - 4) !== urlend){throw 'invlid URL';}
    if(!priceRange.match(/^[$]{1,4}$/)){throw 'invlid price range';}
    if(!Array.isArray(cuisines)){
        throw 'cuisines is not an array';
    }else{
        if(cuisines.length < 1){
            throw 'cuisines array length less than 1';
        }
        cuisines.forEach(StringCheck);
    }
    if(typeof overallRating !== 'number' || overallRating < 0 || overallRating > 5){
        throw 'invlid overallRating';
    }
    if(typeof serviceOptions !== 'object'){
        throw 'serviceOptions not an object'
    } else{
        if(typeof serviceOptions.dineIn !== 'boolean' || typeof serviceOptions.takeOut!== 'boolean' || typeof serviceOptions.delivery !== 'boolean'){
            throw 'dineIn or takeOut or delivery is not boolean';
        }
    }
    let obj = {'name': name, 'location': location, 'phoneNumber': phoneNumber, 'website': website, 'priceRange': priceRange, 'cuisines': cuisines, 'overallRating': overallRating, 'serviceOptions': serviceOptions};
    let resCollection = await restaurants();
    let insertInfo = await resCollection.insertOne(obj);
    if (insertInfo.insertedCount === 0) throw 'Could not add restaurant';
    return getId(insertInfo.insertedId.toString());
}

async function getAll() {
    const restaurantCollection = await restaurants();
    const restaurantList = await restaurantCollection.find({}).toArray();
    restaurantList.forEach(element => {
        element._id = element._id.toString();
    });
    return restaurantList;
}

async function getId(id) {
    StringCheck(id);
    const restaurantCollection = await restaurants();
    let parsedId = ObjectId(id);
    const res = await restaurantCollection.findOne({ _id: parsedId });
    if (res === null) throw 'No restaurant with that id';
    res._id = res._id.toString();
    return res;
}

async function remove(id) {
    StringCheck(id);
    const restaurantCollection = await restaurants();
    let parsedId = ObjectId(id);
    const res = await restaurantCollection.findOne({ _id: parsedId });
    const deletionInfo = await restaurantCollection.deleteOne({ _id: parsedId });
    if (deletionInfo.deletedCount === 0) {
        throw `Could not remove restaurant with id of ${id}`;
      }
    return res.name + " has been successfully deleted!";
}

async function rename(id, newWebsite) {
    StringCheck(id);
    let parsedId = ObjectId(id);
    StringCheck(newWebsite);
    let urlstart = 'http://www.';
    let urlend = '.com';
    if (newWebsite.length < 5 + urlend.length + urlstart.length){throw 'invlid URL';}
    if(newWebsite.slice(0,11) !== urlstart || newWebsite.slice(newWebsite.length - 4) !== urlend){throw 'invlid URL';}
    const restaurantCollection = await restaurants();
    const updatedInfo = await restaurantCollection.updateOne(
        { _id: parsedId },
        { $set: { website: newWebsite } }
      );
      if (updatedInfo.modifiedCount === 0) {
        throw 'could not update restaurant successfully';
      }
    return await this.getId(id);
}

module.exports = {
    create,
    getAll,
    getId,
    remove,
    rename
}