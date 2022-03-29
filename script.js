const forms = document.querySelector('#forms');
const one = document.querySelector('#one');
const two = document.querySelector('#two');
const three = document.querySelector('#three');
const four = document.querySelector('#four');
const five = document.querySelector('#five');
const six = document.querySelector('#six');
const seven = document.querySelector('#seven');
const eight = document.querySelector('#eight');
const nine = document.querySelector('#nine');
const zero = document.querySelector('#zero');

one.addEventListener('click', function() {
    document.forms.display.value += 1;
});
two.addEventListener('click', function() {
    document.forms.display.value += 2;
});
three.addEventListener('click', function() {
    document.forms.display.value += 3;
});
four.addEventListener('click', function() {
    document.forms.display.value += 4;
});
five.addEventListener('click', function() {
    document.forms.display.value += 5;
});
six.addEventListener('click', function() {
    document.forms.display.value += 6;
});
seven.addEventListener('click', function() {
    document.forms.display.value += 7;
});
eight.addEventListener('click', function() {
    document.forms.display.value += 8;
});
nine.addEventListener('click', function() {
    document.forms.display.value += 9;
});
zero.addEventListener('click', function() {
    document.forms.display.value += 0;
});

const clear = document.querySelector('#clear');
const multi = document.querySelector('#multi');
const divide = document.querySelector('#divide');
const add = document.querySelector('#add');
const subs = document.querySelector('#subs');
const dot = document.querySelector('#dot');
const equal = document.querySelector('#equal');
const inputNum = document.querySelector('#inputNum');

multi.addEventListener('click', function() {
    document.forms.display.value += '*';
});
divide.addEventListener('click', function() {
    document.forms.display.value += '/';
});
add.addEventListener('click', function() {
    document.forms.display.value += '+';
});
subs.addEventListener('click', function() {
    document.forms.display.value += '-';
});
dot.addEventListener('click', function() {
    document.forms.display.value += '.';
});
equal.addEventListener('click', function() {
    if(document.forms.display.value == "") {
        alert("Tolong Masukan Angka!");
    } else {
        document.forms.display.value = eval(document.forms.display.value);
    }
    // console.log(eval(document.forms.display.value));
});
clear.addEventListener('click', function() {
    document.forms.display.value = "";
});
