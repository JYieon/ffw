type Person = { name : string, age: number };

const p1 : Person = { name: "홍길동" };
const p2 : Person = { name: "임꺽정", age: 19, email: "lim@skhu.net" };
//Person 타입에 포함되지 않은 email 속성값을 부여해서 컴파일 에러 발생

console.log(p1);
console.log(p2);

export {}

//error