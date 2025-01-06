function memoize(fn) {
    const cache = new Map();
    let callCount = 0;
    
    function memoized(...args) {
        const key = JSON.stringify(args);
        
        if (cache.has(key)) {
            return cache.get(key);
        }
        
        callCount++;
        const result = fn(...args);
        cache.set(key, result);
        return result;
    }

    memoized.getCallCount = function() {
        return callCount;
    };

    return memoized;
}

// Example
const sum = (a, b) => a + b;
const memoizedSum = memoize(sum);
console.log(memoizedSum(2, 2));
console.log(memoizedSum(2, 2));
console.log(memoizedSum.getCallCount());
console.log(memoizedSum(1, 2));
console.log(memoizedSum.getCallCount());

const factorial = (n) => (n <= 1) ? 1 : (n * factorial(n - 1));
const memoFactorial = memoize(factorial);
console.log(memoFactorial(2)); (call)
console.log(memoFactorial(3));
console.log(memoFactorial(2)); (cached)
console.log(memoFactorial.getCallCount());
console.log(memoFactorial(3));
console.log(memoFactorial.getCallCount());

const fib = (n) => (n <= 1) ? 1 : fib(n - 1) + fib(n - 2);
const memoFib = memoize(fib);
console.log(memoFib(5));
console.log(memoFib.getCallCount());
