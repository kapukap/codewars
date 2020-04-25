
var beeramid = function(bonus, price) {
    let sum=0, n=1, counter=0;
    while (bonus>sum){
        sum+=Math.pow(n,2)*price;
        if (bonus<sum){return counter;}
        n++;
        counter++;
    }
    return counter;
};