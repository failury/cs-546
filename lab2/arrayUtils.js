var errorCheck = function (array) {
    if (!Array.isArray(array)) {
        throw 'Input is not an array';
    }
    if (array.length == 0) {
        throw 'Empty array';
    }
}
function isLetter(str) {
    //https://stackoverflow.com/a/9862788
    return str.length === 1 && str.match(/[a-z]/i);
  }
// Given an array of arrays, you will return the rounded average value of all elements in the array(i.e use the Math.round method). 
function average(arrays) {

    //check for outer array
    errorCheck(arrays);
    //check for subarrays
    arrays.forEach(element => {
        errorCheck(element);
        if (!element.every((e) => { return typeof e === 'number' })) {
            throw 'At least one element in a subarray is not a number';
        }
    });

    //average of average
    let average = function (array) { return array.reduce((a, b) => a + b, 0) / array.length; };
    let temp = arrays.map(average);
    return Math.round(average(temp));
}
// Returns the mode value of the elements of an array squared. As the function name states,  it's the mode squared, so you will first find the mode and then square it! If there is no mode, you will return 0. If there are multiple modes, you will sum the square of them.
function modeSquared(array) {
    //error check
    errorCheck(array);
    if (!array.every((e) => { return typeof e === 'number' })) {
        throw 'At least one element in a subarray is not a number';
    }
    //finding mode
    let frequency = {};
    array.forEach(element => {
        frequency[element] === undefined ? frequency[element] = 1 : frequency[element]++;
    });
    let mode = [Object.keys(frequency).reduce((a, b) => frequency[a] >= frequency[b] ? a : b)][0];
    let temp = frequency[mode];
    delete frequency[mode];
    let modes = [];
    if (temp > 1) {
        modes.push(mode);
        for (var key in frequency) {
            if (frequency[key] == temp) {
                modes.push(key);
            }
        }
    }
    if (modes.length == 0) {
        return 0;
    } else if (modes.length == 1) {
        return modes[0] * modes[0];
    } else {
        modes = modes.map(x => x * x);
        return modes.reduce((a, b) => a + b, 0);
    }
}
// Scan the array from one end to the other to find the median element. Return both the median element of the array and the index (original position) of this element as a new object with the value as the key and the index as the value. If the array has an even length, you will take the average of the two elements as the key and the higher index as the value. 
function medianElement(array) {
    //error check
    errorCheck(array);
    if (!array.every((e) => { return typeof e === 'number' })) {
        throw 'At least one element in a subarray is not a number';
    }

    let index = {}
    array.forEach((e, i) => {
        if (!(e in index)){
            index[e] = i;
        }
        
    });
    let sorted = array.sort((a,b) => a - b);
    let mid = Math.floor(sorted.length / 2);
    let median,indexValue = 0;
    if (sorted.length % 2 == 0) {
        let first = sorted[mid - 1];
        let second = sorted[mid];
        median = (first + second) / 2.0;
        indexValue = (index[first] > index[second]) ? index[first] : index[second];
    }else{
        median = sorted[mid];
        indexValue = index[median];
    }
    let res = {};
    res[median] = indexValue;
    return res;

}
// Given two arrays, you will return one sorted array. Each element can either be a number or a character. You will first sort alphabetically (lowercase to uppercase) and then numerically. 
function merge(arrayOne, arrayTwo) {
    errorCheck(arrayOne);
    errorCheck(arrayTwo);
    if (!arrayOne.every((e) => { return (typeof e === 'number') ||  isLetter(e)})) {
        throw 'At least one element in a subarray is not a number';
    }
    let raw = arrayOne.concat(arrayTwo);
    let numbers = raw.filter((e)=>{return typeof e === 'number'})
    let lowercase = raw.filter((e)=>{return (typeof e === 'string') && (e == e.toLowerCase())});
    let uppercase = raw.filter((e)=>{return (typeof e === 'string') && (e != e.toLowerCase())});
    let res = lowercase.sort().concat(uppercase.sort()).concat(numbers.sort());
    return res;
}

module.exports = {
    average,
    modeSquared,
    medianElement,
    merge
};