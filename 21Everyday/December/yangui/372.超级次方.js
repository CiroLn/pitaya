/**
 * @param {number} a
 * @param {number[]} b
 * @return {number}
 */
let base = 1337;
let dealPow = function (a, b) {
    if (b == 0) {
        return 1
    }

    a %= base
    if ((b % 2) == 0) {
        return dealPow(a * a, b / 2)
    } else {
        return a * dealPow(a, b - 1)
    }
}
var superPow = function (a, b) {

    if (b.length == 0) {
        return 1;
    }
    let last = b.pop();
    let powa = dealPow(a, last);
    let powb = dealPow(superPow(a, b), 10);

    return (powa * powb) % base;
};

