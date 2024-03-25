function getSumAndAverage(n){
    let sum = 0;
    let i;
    let sa = [];
    for(i=0;i<n.length;++i){
        sum += n[i];
        
    }
    sa[0] = sum;
    sa[1] = sum/i;
    return sa;
    
}

let number = [1,2,3,4,5,6,7,8,9,10]
let sum,avg;
[sum,avg] = getSumAndAverage(number);
console.log(sum,avg);