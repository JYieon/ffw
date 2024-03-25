function print(...params) {
    console.log("\n파라미터 수:", params.length);
    for (let i = 0; i < params.length; ++i)
        console.log("  " + i + "번 파라미터: " + params[i]);
}

let a = ["one", "two", "three"];
print(a);
print(...a);

