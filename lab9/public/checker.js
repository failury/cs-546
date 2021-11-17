
var errorCheck = function (string) {
    string = string.trim();
    if (!(typeof string === 'string')) {
        return false;
    }
    if (string.length == 0) {
        return false;
    }
}
document.querySelector('form').addEventListener('submit', (event) => {
    event.preventDefault();
    let raw = document.querySelector('#checker').value;
    if (errorCheck(raw)){
        alert("Empty string");
        document.querySelector('#checker').value = "";
        return;
    }
    document.querySelector('#checker').value = "";
    let cleaned = raw.toLowerCase().replace(/[^a-zA-Z0-9]+/g, "");
    let reverse = cleaned.split('').reverse().join('');
    let attempts = document.querySelector('#attempts');
    let newItem = document.createElement('li');
    newItem.appendChild(document.createTextNode(raw));
    if(reverse != cleaned){
        newItem.classList.add('not-palindrome');
    }else{
        newItem.classList.add('is-palindrome');
    }
    attempts.appendChild(newItem);
});


