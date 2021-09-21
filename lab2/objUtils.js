var errorCheckArray = function (array) {
    if (!Array.isArray(array)) {
        throw 'Input is not an array';
    }
    if (array.length == 0) {
        throw 'Empty array';
    }
}
function isEmpty(obj) {
    //https://stackoverflow.com/a/679937
    return Object.keys(obj).length === 0;
}
// This method will take in an array of objects and a function, and will return one object. You must check that each value is a number type. You will evaluate the function on the values of the object, if multiple objects have the same key, you will add that value to the current value. The return object will not have any duplicated keys. 
function computeObjects(objects, func){
    errorCheckArray(objects);
    if (!objects.every((e) => { return typeof e === 'object' })) {
        throw 'At least one element in the array is not an object';
    }
    if (!objects.every((e) => {return !isEmpty(e) })) {
        throw 'At least one object in the array is empty';
    }
    if (!objects.every((e) => { return Object.values(e).every(x => (typeof x === 'number')) })) {
        throw 'At least one value in one of the objects is not a number';
    }
    if (!(typeof func === 'function')) {
        throw 'function input is not a function';
    }
    let reducer = (a, obj) =>{
        for (const k in obj) {
                a[k] = (a[k] || 0) + obj[k];
        }
        return a;
    };
    let sum = objects.reduce(reducer);
    Object.keys(sum).map((element) => { sum[element] = func(sum[element])});
    return sum;
    }
    
// This method will return a new object with key-value pairs that exist in both objects. Objects as values are valid. If no common keys are found, return an empty object.
function commonKeys(obj1, obj2){
    let array = [obj1,obj2];
    if (!array.every((e) => { return typeof e === 'object' })) {
        throw 'At least one element in the array is not an object';
    }
    let res = {};
    Object.keys(obj1).forEach(element => {
        if (element in obj2 && obj1[element] == obj2[element]){
            res[element] = obj1[element];
        }
        if (element in obj2 && typeof obj1[element] === 'object' && typeof obj2[element] === 'object'){
            res[element] = commonKeys(obj1[element],obj2[element]);
        }
    });
    return res;
}
// Given an object, you will return a new object where the values are now the keys and the keys are now the value. If a value has a type of array, for each element, you will have the element as the key and the value will be the original key. If a value has an object, you will flip those keys and values as well, but keep the key as the same.
function flipObject(object) {
    if(!(typeof object === 'object') || isEmpty(object)){
        throw 'not a object or empty object';
    }
    let res = {};
    for (const k in object) {
        let newkey = object[k];
        if(Array.isArray(newkey)){
            //if value has a type of array
            if (newkey.length == 0){
                throw 'empty array';
            }
            newkey.forEach(e => {
                res[e] = k;
            });
        }else if(typeof newkey === 'object'){
            //if a value has an object,
            res[k] = flipObject(newkey);
        }else{
            res[newkey] = k;
        }
    }
    return res;
}

module.exports = {
    computeObjects,
    commonKeys,
    flipObject
}