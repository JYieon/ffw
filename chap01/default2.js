function printPerson(name = "없음", age = 0, email = "없음") {
    console.log("name=", name, "  age=", age, "  email=", email);
}

printPerson("홍길동", 16, "hong@skhu.ac.kr");
printPerson("홍길동", 16);
printPerson("홍길동");
printPerson();

