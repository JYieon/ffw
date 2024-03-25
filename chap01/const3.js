const p = { name: "홍길동", age: 16 };
console.log(p);

Object.freeze(p);
p.age = 17;
console.log(p);

const a = [1, 2, 3, 4];
console.log(a);

Object.freeze(a);
a[0] = 10;
console.log(a);

