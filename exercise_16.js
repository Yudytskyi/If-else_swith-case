const day = Number(prompt('Please enter your value'));
const decade = Math.round((day - 1) / 10 + 0.5);
let result;

switch (decade) {
    case 1:
        result = 'first';
        break;
    case 2:
        result = 'second';
        break;
    default:
        result = 'third';
        break
}
alert(result)