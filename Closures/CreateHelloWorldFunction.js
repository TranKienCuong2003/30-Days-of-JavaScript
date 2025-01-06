function createHelloWorld() {
    return function() {
        return "Hello World";
    };
}

// Example
const f = createHelloWorld();
console.log(f());
console.log(f({}, null, 42));
