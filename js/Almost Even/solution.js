var splitInteger = function(num, parts) {
    let arr = [];
    while (parts>0){
        let divide = Math.floor(num/parts);
        arr.push(divide);
        num = num - divide;
        --parts;
    }
    return arr;
};