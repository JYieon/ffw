function sum(...numbers) {
    let result = 0;
    for (let i of numbers)
        result += i;
    return result;
}

function average(...numbers) {
    return sum(...numbers) / numbers.length;
}

export { average, sum };

/*하나씩 export하는 방법(위와 동일한 코드)
export function sum(...numbers) {
  let result = 0;
  for (let i of numbers)
      result += i;
  return result;
}

export function average(...numbers) {
  return sum(...numbers) / numbers.length;
}

*/