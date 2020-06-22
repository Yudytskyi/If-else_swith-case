const a = prompt('Please enter your value');

switch (a) {
    case 'test':
    case 'тест':
        alert(true);
        break;
    default:
        alert(false)
}
