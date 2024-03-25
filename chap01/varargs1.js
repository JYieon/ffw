function sum(...numbers) {
    let result = 0;
    for (let i of numbers)
        result += i;
    return result;
}

console.log(sum(4, 3, 2, 1));
console.log(sum(3, 2, 1));
console.log(sum(2, 1));
console.log(sum(1));
console.log(sum());

