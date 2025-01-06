function createCounter(init) {
    let current = init;

    return {
        increment: function() {
            return ++current;
        },
        decrement: function() {
            return --current;
        },
        reset: function() {
            current = init;
            return current;
        }
    };
}

// Example
const counter1 = createCounter(5);
console.log(counter1.increment());
console.log(counter1.reset());
console.log(counter1.decrement());

const counter2 = createCounter(0);
console.log(counter2.increment());
console.log(counter2.increment());
console.log(counter2.decrement());
console.log(counter2.reset());
console.log(counter2.reset());
