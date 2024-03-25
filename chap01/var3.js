function test3() {
    console.log("A)", sum);
    for (let i = 1; i <= 10; ++i) {
        var sum = 0;
        sum = sum + i;
        console.log("B)", sum);
    }
    console.log("C)", sum);
}

test3();
