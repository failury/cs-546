const questionOne = function questionOne(arr) {
    if (arr == null) return {};
    let res = {};
    arr.forEach(e => {
        const checkPrime = x => {
            for (let i = 2; i < x; i++)
                if (x % i === 0) return false;
            if (x > 1) return true
        };
        let result = Math.abs(Math.pow(e, 2) - 7);
        let isPrime = checkPrime(result);
        res[result] = isPrime;
    });
    return res;
}

const questionTwo = function questionTwo(arr) {
    let res = []
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        let previous = arr.slice(0, i);
        if (!previous.includes(element)) res.push(element);

    }
    return res;
}

const questionThree = function questionThree(arr) {
    let res = {};
    const sortString = (S) => {
        //reference https://stackoverflow.com/questions/30912663/sort-a-string-alphabetically-using-a-function
        return S.split('').sort().join('');
    };
    const checkAnagrams = (S1, S2) => {
        return sortString(S1) === sortString(S2);
    };
    arr = questionTwo(arr);
    const recur = (arr) => {
        if (arr.length > 0) {
            let firstString = arr[0];
            arr.shift();
            for (let i = 0; i < arr.length; i++) {
                const element = arr[i];
                if (checkAnagrams(firstString, element)) {
                    res[sortString(firstString)] = [firstString];
                    res[sortString(firstString)].push(element);
                    arr.splice(i, 1);
                }
            }
            recur(arr);
        }
    };
    recur(arr);
    return res;
}

const questionFour = function questionFour(num1, num2, num3) {
    const factorials = (num) => {
        if (num == 0 || num == 1) {
            return 1;
        } else {
            return num * factorials(num - 1);
        }
    };
    let arr = [num1, num2, num3];
    let facarr = arr.map(factorials);
    return Math.floor(facarr.reduce((a, b) => a + b, 0) /(arr.reduce((a, b) => a + b, 0) / 3));


}

module.exports = {
    firstName: "Ruifeng",
    lastName: "Zhang",
    studentId: "20007484",
    questionOne,
    questionTwo,
    questionThree,
    questionFour
};