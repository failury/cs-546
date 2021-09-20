const arrayUtils = require('./arrayUtils');
const stringUtils = require('./stringUtils');
// Average Tests
try {
    //should Pass
    const averageOne = arrayUtils.average([[1], [2], [3]]);//Returns: 2
    console.log('average passed successfully');
} catch (error) {
    console.error('average failed test case');
}
try {
    //should Pass
    const averageOne = arrayUtils.average([[1,3], [2,4,5]]);//Returns: 3
    console.log('average passed successfully');
} catch (error) {
    console.error('average failed test case');
}
try {
    //should failed
    const averageOne = arrayUtils.average([[1,3], ["hi",4,5]]); // throws an error 
    console.error('average did not error');
} catch (error) {
    console.error('average failed test case');
}
try {
    //should failed
    const averageOne = arrayUtils.average([[1,3], []]); // throws an error 
    console.error('average did not error');
} catch (error) {
    console.error('average failed test case');
}
try {
    //should failed
    const averageOne = arrayUtils.average([[1,3], [1],[]]); // throws an error 
    console.error('average did not error');
} catch (error) {
    console.error('average failed test case');
}
try {
    //should failed
    const averageOne = arrayUtils.average([]); // throws an error 
    console.error('average did not error');
} catch (error) {
    console.error('average failed test case');
}
try {
    //should failed
    const averageOne = arrayUtils.average("banana"); // throws an error 
    console.error('average did not error');
} catch (error) {
    console.error('average failed test case');
}
try {
    //should failed
    const averageOne = arrayUtils.average(["guitar", 1, 3, "apple"]); // throws an error 
    console.error('average did not error');
} catch (error) {
    console.error('average failed test case');
}
try {
    //should failed
    const averageOne = arrayUtils.average(); // throws an error 
    console.error('average did not error');
} catch (error) {
    console.error('average failed test case');
}



//ModeSquared Tests
try {
    //should Pass
    const modeSquared = arrayUtils.modeSquared([1,2,3,4,5]); // Returns: 0
    console.log('modeSquared passed successfully');
} catch (error) {
    console.error('modeSquared failed test case');
}
try {
    //should failed
    const modeSquared = arrayUtils.modeSquared([]) // throws an error
    console.error('modeSquared did not error');
} catch (error) {
    console.error('modeSquared failed test case');
}
try {
    //should failed
    const modeSquared = arrayUtils.modeSquared("banana"); // throws an error
    console.error('modeSquared did not error');
} catch (error) {
    console.error('modeSquared failed test case');
}
try {
    //should failed
    const modeSquared = arrayUtils.modeSquared(1,2,3); // throws an error
    console.error('modeSquared did not error');
} catch (error) {
    console.error('modeSquared failed test case');
}
try {
    //should failed
    const modeSquared = arrayUtils.modeSquared(["guitar", 1, 3, "apple"]); // throws an error
    console.error('modeSquared did not error');
} catch (error) {
    console.error('modeSquared failed test case');
}
try {
    //should failed
    const modeSquared = arrayUtils.modeSquared(); // throws an error
    console.error('modeSquared did not error');
} catch (error) {
    console.error('modeSquared failed test case');
}



//MedianElement Tests
try {
    //should Pass
    const medianElement = arrayUtils.medianElement([7,6,5,8,9,4]); // Returns: {'6.5', 1}
    console.log('medianElement passed successfully');
} catch (error) {
    console.error('medianElement failed test case');
}
try {
    //should failed
    const medianElement = arrayUtils.medianElement(5, 6, 7); // throws error
    console.error('medianElement did not error');
} catch (error) {
    console.error('medianElement failed test case');
}
try {
    //should failed
    const medianElementmedianElement = arrayUtils.medianElement([]); // throws error
    console.error('medianElement did not error');
} catch (error) {
    console.error('medianElement failed test case');
}
try {
    //should failed
    const medianElement = arrayUtils.medianElement(); // throws error
    console.error('medianElement did not error');
} catch (error) {
    console.error('medianElement failed test case');
}
try {
    //should failed
    const medianElement = arrayUtils.medianElement("test"); // throws error
    console.error('medianElement did not error');
} catch (error) {
    console.error('medianElement failed test case');
}
try {
    //should failed
    const medianElement = arrayUtils.medianElement([1,2,"nope"]); // throws error
    console.error('medianElement did not error');
} catch (error) {
    console.error('medianElement failed test case');
}


//Merge Tests
try {
    //should Pass
    const merge = arrayUtils.merge([1, 2, 3], [3, 1, 2]); // Returns: [1,1,2,2,3,3]
    console.log('merge passed successfully');
} catch (error) {
    console.error('merge failed test case');
}
try {
    //should Pass
    const merge = arrayUtils.merge([1, 2, 3, 'g'], ['d','a', 's']); // Returns:['a', 'd', 'g', 's', 1, 2, 3] 
    console.log('merge passed successfully');
} catch (error) {
    console.error('merge failed test case');
}
try {
    //should Pass
    const merge = arrayUtils.merge(['A', 'B', 'a'], [1, 2, 'Z']); // Returns ['a', 'A', 'B', 'Z', 1, 2]
    console.log('merge passed successfully');
} catch (error) {
    console.error('merge failed test case');
}
try {
    //should failed
    const merge = arrayUtils.merge([null, null, null], [null, null, null]); // throw
    console.error('merge did not error');
} catch (error) {
    console.error('merge failed test case');
}
try {
    //should failed
    const merge = arrayUtils.merge([],['ab', 'ts']); // throws
    console.error('merge did not error');
} catch (error) {
    console.error('merge failed test case');
}



//SortString Tests
try {
    //should Pass
    const sortString = stringUtils.sortString('123 FOO BAR!'); // Returns: "ABFOOR!123  "
    console.log('sortString passed successfully');
} catch (error) {
    console.error('sortString failed test case');
}
try {
    //should failed
    const sortString = stringUtils.sortString(); // Throws Error
    console.error('sortString did not error');
} catch (error) {
    console.error('sortString failed test case');
}
try {
    //should failed
    const sortString = stringUtils.sortString(''); // Throws Error
    console.error('sortString did not error');
} catch (error) {
    console.error('sortString failed test case');
}
try {
    //should failed
    const sortString = stringUtils.sortString(123); // Throws Error
    console.error('sortString did not error');
} catch (error) {
    console.error('sortString failed test case');
}
try {
    //should failed
    const sortString = stringUtils.sortString(["Hello", "World"]); // Throws Error
    console.error('sortString did not error');
} catch (error) {
    console.error('sortString failed test case');
}