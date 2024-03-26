
const a1 = new Array(5);
a1.fill(0);

const a2 = a1.map((value, index) => index * 10);

console.log(a1, a2);

export {}

