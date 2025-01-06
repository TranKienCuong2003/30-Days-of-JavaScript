function compose(functions) {
    return function(x) {
        return functions.reduceRight((acc, fn) => fn(acc), x);
    };
}

// Example
const functions1 = [
    x => x + 1,
    x => x * x,
    x => 2 * x
];
console.log(compose(functions1)(4));

const functions2 = [
    x => 10 * x,
    x => 10 * x,
    x => 10 * x
];
console.log(compose(functions2)(1));

const functions3 = [];
console.log(compose(functions3)(42));
