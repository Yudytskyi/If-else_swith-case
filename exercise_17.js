// const month = Number(prompt('Please enter your value'));
//
// month > 0 && month < 3 || month === 12 ? alert('зима')
//     : month > 2 && month < 6 ? alert('весна')
//     : month > 5 && month < 9 ? alert('лето') : alert('осень')


// const string = prompt('Please enter your value');
// string[0] === 'a'? alert(true):alert(false);

// const string = prompt('Please enter your value');
// const num = Number(string[0]);
// num > 0 && num < 4 ? alert(true) : alert(false);

// const string = prompt('Please enter your value');
// let sum = 0;
// for (num of string) {
//     sum += Number(num);
// }
// alert(sum)

const string = prompt('Please enter your value');
let sum1 = 0;
let sum2 = 0;

for (i = 0; i < string.length; i++) {
    i < string.length / 2 ? sum1 += Number(string[i]) : sum2 += Number(string[i]);
}

sum1 === sum2 ? alert(true) : alert(false);