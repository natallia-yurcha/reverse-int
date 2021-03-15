module.exports = function reverse(n) {
    let num = 0;
    let result = 0;
    n = Math.abs(n);
    while (n > 0) {
        num = n % 10;
        result = result * 10 + num;
        n = Math.floor(n / 10);
    }
    return result;
}
