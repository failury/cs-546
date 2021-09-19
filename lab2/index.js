const arrayUtils = require('./arrayUtils');

// Average Tests
try {
    //should Pass
    const averageOne = arrayUtils.average([[1], [2], [3]]);//Returns: 2
    console.log('average passed successfully with a result of ' + averageOne);
} catch (error) {
    console.error('average failed test case');
}
try {
    //should Pass
    const averageOne = arrayUtils.average([[1,3], [2,4,5]]);//Returns: 3
    console.log('average passed successfully with a result of ' + averageOne);
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
    console.log('modeSquared passed successfully with a result of ' + modeSquared);
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