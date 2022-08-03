function pyramid(n) {

    for (let i = 1; i <= n; i++) {

        let str = " ".repeat(n - i)
        let str2 = "*".repeat(2 * i - 1)

        console.log(str + str2 + str);
    }
}
pyramid(5);
