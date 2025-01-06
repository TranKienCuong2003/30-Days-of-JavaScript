function once(fn) {
    let called = false;
    let result;
    return function(...args) {
        if (!called) {
            called = true;
            result = fn(...args);
            return result;
        }
        return undefined;
    };
}

// Example
const fn1 = (a, b, c) => (a + b + c);
const onceFn1 = once(fn1);
console.log(onceFn1(1, 2, 3));
console.log(onceFn1(2, 3, 6));

const fn2 = (a, b, c) => (a * b * c);
const onceFn2 = once(fn2);
console.log(onceFn2(5, 7, 4));
console.log(onceFn2(2, 3, 6));
console.log(onceFn2(4, 6, 8));
