export let PI = 3.141592;

export function sum(...numbers) {
    let result = 0;
    for (let i of numbers)
        result += i;
    return result;
}

export function average(...numbers) {
    return sum(...numbers) / numbers.length;
}

