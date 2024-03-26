let PI = 3.141592;

function sum(...numbers) {
    let result = 0;
    for (let i of numbers)
        result += i;
    return result;
}

function average(...numbers) {
    return sum(...numbers) / numbers.length;
}

export { average, sum, PI };
export default { average, sum, PI }; //import Math from './math2.js'라고하면 해당 줄의 export가 import됨

