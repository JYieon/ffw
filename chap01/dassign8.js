let person = { name: "홍길동", age: 16, email: "hong@skhu.net" };

print1(person);

function print1(person) {
   console.log(person.name, person.age, person.email);
}

print2(person);

function print2({ name, age, email }) {
   console.log(name, age, email);
}

