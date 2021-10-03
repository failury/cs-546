
var errorCheck = function (string) {
    string = string.trim();
    if (!(typeof string === 'string')) {
        throw 'Input is not an string';
    }
    if (string.length == 0) {
        throw 'Empty string';
    }
}
var isDigit = function(c) {
    return c >= '0' && c <= '9';
  }

var isSpecialchar = function (c){
    let allSpecialChars = '~`!#$%^&*+=-[]\\\';,/{}|\":<>?';
    return allSpecialChars.indexOf(c) > -1;
}
function isLetter(str) {
    //https://stackoverflow.com/a/9862788
    return str.length === 1 && str.match(/[a-z]/i);
  }
// Given a string, you will return the sorted string. You will sort the string from uppercase to lowercase, any special characters, numbers, and then spaces.
function sortString(string){
    errorCheck(string);
    string = Array.from(string);
    let numbers = string.filter((e)=>{return isDigit(e)});
    let lowercase = string.filter((e)=>{return (isLetter(e)) && (e == e.toLowerCase())});
    let uppercase = string.filter((e)=>{return (isLetter(e)) && (e != e.toLowerCase())});
    let spaces = string.filter((e)=>{return  e == ' '});
    let specialchar = string.filter((e)=>{return isSpecialchar(e)});
    let combined = [...uppercase.sort(), ...lowercase.sort(), ...specialchar.sort(), ...numbers.sort(), ...spaces];
    return combined.join("");
}
// Given string and index, you will find the value from the string index, then you will replace any characters in the string that are the same as that value except for that string index value. You will grab the value before and after the index and those are the values that you will be alternating between when replacing the characters.   
function replaceChar(string, idx) {
    errorCheck(string);
    if (idx < 1 || idx > string.length - 2){
        throw 'idx in not valid';
    }
    if (!(typeof idx === 'number')){
        throw 'invalid idx type';
    }
    let previous = string[idx - 1];
    let next = string[idx + 1];
    let isPrevious = true;
    let res = Array.from(string);
    for (let i = 0; i < res.length; i++) {
        if(i != idx && res[i] == res[idx]){
            if(isPrevious){
                res[i] = previous;
                isPrevious = false;
            }else{
                res[i] = next;
                isPrevious = true;
            }
        }
    }
    return res.join("");
}
// Given string1 and string2 return the concatenation of the two strings, with alternating characters of both strings.  Note: If the strings are not the same length, you will pad the one that has less characters with the char parameter (you only use the 3rd parameter if string1 and string2 are not the same length:  For example: "Patrick" and "Hill", "Hill" has 3 characters less than "Patrick" so you would pad "Hill" with the character supplied as the 3rd char parameter
function mashUp(string1, string2, char) {
    errorCheck(string1);
    errorCheck(string2);
    errorCheck(char);
    string1 = Array.from(string1);
    string2 = Array.from(string2);
    let len1 = string1.length;
    let len2 = string2.length;
    if(len1 < len2){
        for (let i = 0; i < len2 - len1; i++) {
            string1.push(char);        
        }
    }else{
        for (let i = 0; i <len1 - len2; i++) {
            string2.push(char);        
        }
    }
    let res = [];
    for (let i = 0; i < string1.length; i++) {
        res.push(string1[i]);
        res.push(string2[i]);
    }
    return res.join("");
}

module.exports = {
    sortString,
    replaceChar,
    mashUp
}