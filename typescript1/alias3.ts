type Person = { name : string, age?: number, email?: string };

const p1 : Person = { name: "홍길동" };
const p2 : Person = { name: "임꺽정", age: 19, email: "lim@skhu.net" };

console.log(p1);
console.log(p2);

export {}
