const num = Number(prompt('Please enter your value'));
let result;

switch (num) {
    case 1:
        result = 'зима';
        break;
    case 2:
        result = 'весна';
        break;
    case 3:
        result = 'лето';
        break;
    case 4:
        result = 'осень';
        break;
}
alert(result)