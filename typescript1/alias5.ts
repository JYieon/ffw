type Person = { readonly name : string, age: number, email: string };

const a : Person[] = [ { name: "홍길동", age: 16, email: "hong@skhu.net" },
                        { name: "임꺽정", age: 19, email: "lim@skhu.net" } ];

for (let person of a)
    console.log(person);

export {}
