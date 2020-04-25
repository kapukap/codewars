function squareDigits(num){
    num = num.toString().split('');
    num = num.map(item => item * item).toString().replace(/,/g,'');
    return parseInt(num);
}
