const mongoCollections = require('./../config/mongoCollections');
const res = require('./restaurants')
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
var isDate = function(input) {
    let date = new Date(input);
    return ((date !== "Invalid Date") && !isNaN(date) && date.toDateString() === new Date().toDateString())
}
async function CalOveralRating(restaurantId){
    //input is an Objectid
    let resCollection = await restaurants();
    let array = await resCollection.find({_id: restaurantId},{ projection: { _id: 0, 'reviews.rating': 1 }}).toArray();
    array = array[0].reviews
    array = array.map(x => x.rating);
    let average = function (array) { return array.reduce((a, b) => a + b, 0) / array.length; };
    let averageRating = average(array);
    let updatedInfo = resCollection.updateOne({ "_id": restaurantId },{$set:{'overallRating': averageRating}});
    if (updatedInfo.modifiedCount === 0) {
        throw 'could not update overall rating';
      }
}
async function create(restaurantId, title, reviewer, rating, dateOfReview, review){
    let args = Array.prototype.slice.call(arguments);
    if (args.length !== 6){throw 'Some of the inputs is not provided';}
    args.filter(e => args.indexOf(e) !=3).forEach(StringCheck);
    let parsedId = ObjectId(restaurantId);
    if (typeof rating != 'number' && rating < 1 && rating > 5){
        throw 'invlid rating';
    }
    if(!isDate(dateOfReview)){
        throw 'invalid date';
    }
    let obj = { 
        _id:ObjectId(),
        title: title,
        reviewer: reviewer,
        rating: rating,
        dateOfReview: dateOfReview,
        review: review
      }
      let resCollection = await restaurants();
      const updatedInfo = await resCollection.updateOne({ _id: parsedId },{ $push: {reviews: obj} });
      if (updatedInfo.modifiedCount === 0) {
        throw 'could not create review successfully';
      }
      CalOveralRating(parsedId);
      let rest = await res.get(restaurantId);
      rest.reviews.forEach(element => {
        element._id = element._id.toString();
    });
      return rest;
}


async function getAll(restaurantId){
    StringCheck(restaurantId);
    let parsedId = ObjectId(restaurantId);
    let resCollection = await restaurants();
    let reviews = await resCollection.find({_id: parsedId},{ projection: { _id: 0, reviews: 1 }}).toArray();
    reviews[0].reviews.forEach(element => {
        element._id = element._id.toString();
    });
    return reviews[0].reviews;
}

async function get(reviewId){
    StringCheck(reviewId);
    let parsedId = ObjectId(reviewId);
    let resCollection = await restaurants();
    let review =  await resCollection.findOne({reviews: {$elemMatch: {_id: parsedId}}},{ projection: { _id: 0, reviews: 1 }});
    if (review === null) throw 'No restaurant with that id';
    let res = {};
    review.reviews.forEach(element => {
        if(element._id.toString() === reviewId){
            element._id = element._id.toString();
            res = element;
        }
    });
    return res;
}
async function remove(reviewId){
    StringCheck(reviewId);
    let parsedId = ObjectId(reviewId);
    let resCollection = await restaurants();
    let restaurant =  await resCollection.findOne({reviews: {$elemMatch: {_id: parsedId}}},{ projection: { _id: 1, reviews: 0 }});
    if(restaurant == null){
        throw 'cant not find review'
    }else{
        let updatedInfo = await resCollection.updateOne({ _id: restaurant._id }, { $pull: { reviews: { _id: parsedId } } })
        if (updatedInfo.modifiedCount === 0) {
            throw 'could not remove review';
        }
        CalOveralRating(restaurant._id);
    }
    
    
}


module.exports = {
    create,
    getAll,
    get,
    remove
}